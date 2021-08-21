const model = require('../database/modelo/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req,res) => {
    // return res.status(200).send({ message: 'entrando OK a login' })
    const { username, password } = req.body;
    if (!username) {
        return res.status(401).send({message: 'debe completar el username'});
    }
    if (!password) {
        return res.status(401).send({message: 'Debe completar su password'});
    }
    await model.User.findOne( { where: { username: username}}).then (
        (usuario) => {
            if (!usuario) {
                return res.status(401).json(
                    { error: new Error("Datos incorrectos.")}
                );
            }
            // return res.status(200).send({message : "pass entrada:" + req.body.password + " - usu.pass" + usuario.password });
            console.log("pass entrada:" + req.body.password + " - usu.pass" + usuario.password );
            // si lo encontro ahora tengo que controlar la password
            bcrypt.compare(req.body.password, usuario.password).then (
                (valido) => {
                    if (!valido) {
                        return res.status(401).send( {message : "Datos incorrectos..pass"});
                    }
                    const token = jwt.sign({ id: usuario.id }, 'mySecretKey', {
                        expiresIn: 50000,
                      });
                    return res.status(200).send(
                        {id: usuario.id,
                         username : usuario.username,
                         token : token
                        }
                    );
                }
            )
        }
    );
}

const register = async (req,res) => {
    const { firstName, lastName, username, email, password } = req.body;
    if (!username || !password) {
        return res.status(401).send({message: 'los recibidos estan incompletos'});
    }
    const ExisteCount= await model.User.count( { where: { username: username}});
    if (ExisteCount > 0) {
        return res.status(402).send({message: 'el nombre del usuario ya existe'});
    }
    // return res.status(401).json({"ExisteCount": ExisteCount});
    const passwordHasheada = await bcrypt.hashSync(password,8);

    const usuarioCreado = await model.User.create( {
        firstName: firstName,
        lastName: lastName,
        username : username,
        password: bcrypt.hashSync(password,8),
        email
    });

    const token = jwt.sign({ id: usuarioCreado.id }, 'mySecretKey', {
        expiresIn: 50000,
      });
    return res.status(201).json({token : token})
}


module.exports = { login, register }

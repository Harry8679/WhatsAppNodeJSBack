export async function register(req, res, next) {
    try {
        res.send(req.body);
    }catch (error) {
        next(error);
    }
}

export async function login(req, res, next) {
    try {

    }catch (error) {
        next(error);
    }
}

export async function logout(req, res, next) {
    try {

    }catch (error) {
        next(error);
    }
}

export async function refreshToken(req, res, next) {
    try {

    }catch (error) {
        next(error);
    }
}
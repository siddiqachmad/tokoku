const handleError = (err, req, res, next) => {
    switch (err.name) {
        case 'SequelizeValidationError':
            const errors = err.errors.map(el => el.message)
            res.status(400).json({ errors });
            break;
        case 'not found':
            res.status(404).json({ errors: 'Not Found' })
            break;
        default:
            res.status(500).json({
                error: err
            })
            break;
    }
}

module.exports = handleError;
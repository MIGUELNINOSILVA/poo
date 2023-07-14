const getTraders = async(req, res) => {
    try {
        const trader = await findOne
        res.status(500).json({
            "message": "Home page"
        })
    } catch (error) {

    }
}

export {
    getTraders
}
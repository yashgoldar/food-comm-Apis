const testUserController =  (req, res) => {
    try {
        res.status(200).send('<h1>Test User Data</h1>');
        //     {
        //   success: true,
        //   message: "test user Data API",
        // }
    
    } catch (err) {
        console.error('Error in Test API', err)
    }

}

module.exports = { testUserController };
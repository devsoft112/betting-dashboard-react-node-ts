import app from './app';
import sequelize from './config/database';
import SportEvent from './models/SportEvent';
import User from './models/User';
import users from './data/users';
import sportEvents from './data/sportEvents';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
        await sequelize.sync({ force: true });
        
        const userData = await users();
        
        await User.bulkCreate(userData);
        await SportEvent.bulkCreate(sportEvents);
        
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1); // Exit process with failure
    }
};

startServer();

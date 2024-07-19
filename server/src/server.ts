import app from './app';
import sequelize from './config/database';
import SportEvent from './models/SportEvent';
import User from './models/User';

const PORT = process.env.PORT || 5000;

console.log('process.env.PORT', process.env.PORT);

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
        // await sequelize.sync({ force: true });
        // await SportEvent.bulkCreate([
        //     { event_name: 'Soccer: Team A vs. Team B', start_time: new Date(), end_time: new Date(), odds_win: 1.75, odds_draw: 3.5, odds_lose: 4.0, status: 'live' },
        //     { event_name: 'Basketball: Team C vs. Team D', start_time: new Date(), end_time: new Date(), odds_win: 2.00, odds_draw: 3.0, odds_lose: 3.5, status: 'live' },
        //     { event_name: 'Tennis: Player E vs. Player F', start_time: new Date(), end_time: new Date(), odds_win: 1.50, odds_draw: 2.5, odds_lose: 2.75, status: 'live' },
        // ]);
        // // Create a default admin user
        // await User.create({ username: 'admin', email: 'admin@example.com', password: 'admin123' });
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1); // Exit process with failure
    }
};

startServer();

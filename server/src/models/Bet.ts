import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import User from './User';
import SportEvent from './SportEvent';

class Bet extends Model {
    public id!: number;
    public user_id!: number;
    public event_id!: number;
    public amount!: number;
    public bet_type!: string;
    public odds!: number;
    public potential_payout!: number;
    public status!: string;
}

Bet.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
    event_id: {
        type: DataTypes.INTEGER,
        references: {
            model: SportEvent,
            key: 'id',
        },
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    bet_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    odds: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    potential_payout: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'pending',
    },
}, {
    sequelize,
    modelName: 'Bet',
    tableName: 'bets',
    timestamps: false,
});

export default Bet;

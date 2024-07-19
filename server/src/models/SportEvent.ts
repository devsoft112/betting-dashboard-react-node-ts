import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class SportEvent extends Model {
    public id!: number;
    public event_name!: string;
    public start_time!: Date;
    public end_time!: Date;
    public odds_win!: number;
    public odds_draw!: number;
    public odds_lose!: number;
    public status!: string;
}

SportEvent.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    event_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    start_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    odds_win: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    odds_draw: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    odds_lose: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'upcoming',
    },
}, {
    sequelize,
    modelName: 'SportEvent',
    tableName: 'sport_events',
    timestamps: false,
});

export default SportEvent;

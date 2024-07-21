import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class SportEvent extends Model {
    public id!: number;
    public event_name!: string;
    public team1_name!: string;
    public team2_name!: string;
    public event_date!: Date;
    public event_time!: string;
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
    team1_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    team2_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    event_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    event_time: {
        type: DataTypes.STRING,
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

import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import bcrypt from 'bcrypt';

class User extends Model {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;

    public async validPassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
    hooks: {
        beforeCreate: async (user: User) => {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        }
    }
});

export default User;

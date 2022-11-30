module.exports = (sequelize, Sequalize) => {
	const userContacts = sequelize.define(
		'UserContacts',
		{
			Id: {
				type: Sequalize.UUID,
				defaultValue: Sequalize.UUIDV1,
				primaryKey: true,
				allowNull: false
			},
            FirstName: { type: Sequalize.STRING(20), allowNull: false },
            MiddleName: { type: Sequalize.STRING(20), allowNull: true },
            LastName: { type: Sequalize.STRING(20), allowNull: false },
            DOB: { type: Sequalize.STRING(50), allowNull: true },
            Email: {
				type: Sequalize.STRING(50),
				primaryKey: true,
				allowNull: false
			},
            PhoneNumber: {
				type: Sequalize.STRING(15),
				primaryKey: true,
				allowNull: false
			},
            Occupation: { type: Sequalize.STRING(50), allowNull: true },
            Company: { type: Sequalize.STRING(50), allowNull: true },
            Password: { type: Sequalize.STRING(), allowNull: false }
		},
		{
			timestamps: false,
			freezeTableName: true,
			tableName: 'UserContacts'
		}
	);
	return userContacts;
};

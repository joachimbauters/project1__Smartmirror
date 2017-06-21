class DbClass:
    def __init__(self):
        import mysql.connector as connector

        self.__dsn = {
            "host": "localhost",
            "user": "finley",
            "passwd": "root",
            "db": "ENMDatabase"
        }

        self.__connection = connector.connect(**self.__dsn)
        self.__cursor = self.__connection.cursor()

    def getDataFromDatabase(self):
        # Query zonder parameters
        sqlQuery = "SELECT Boodschap FROM ENMDatabase.WelkomsBoodschappen"

        self.__cursor.execute(sqlQuery)
        result = self.__cursor.fetchall()
        self.__cursor.close()
        return result

    def getimagesfromdatabase(self):
        sqlquery = "SELECT Imagefile FROM ENMDatabase.Images"
        self.__cursor.execute(sqlquery)
        result = self.__cursor.fetchall()
        self.__cursor.close()
        return result


    def setDataToDatabase(self, value1):
        # Query met parameters
        sqlQuery = "INSERT INTO Temperatuursmeting (SensorWaarde) VALUES ('{param1}')"
        # Combineren van de query en parameter
        sqlCommand = sqlQuery.format(param1=value1)

        self.__cursor.execute(sqlCommand)
        self.__connection.commit()
        self.__cursor.close()
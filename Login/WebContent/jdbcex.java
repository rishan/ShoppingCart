import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import com.mysql.jdbc.*;

public class jdbcex {

	public static void main(String[] args) throws SQLException {
		Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/mydatabase","root","beehyv123");
		Statement state=con.createStatement();
		ResultSet rs=state.executeQuery("SELECT * FROM mytable");
		while(rs.next()){
			int serial=rs.getInt("serial");
			String username=rs.getString("username");
			String password=rs.getString("password");
			System.out.println("serial:"+serial+"\nusername:"+username+"\npassword:"+password);
		}
		state.close();
		con.close();
	}

}

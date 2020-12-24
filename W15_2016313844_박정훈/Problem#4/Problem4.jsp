<%@page language="java" import="java.util.*, java.sql.*" session="true" contentType="text/html; charset=utf-8" %>

<%
Connection conn=null;
ResultSet rs = null;
Statement stmt=null;

try{
    Class.forName("com.mysql.jdbc.Driver");
    conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/problem4", "root", "1234");
}
catch(SQLException ex){
    System.out.println("SQLException:"+ex.getMessage());
    System.out.println("SQLState:"+ex.getSQLState());
    System.out.println("VendorError:"+ex.getErrorCode());
}finally{
    out.println(conn);
}

try{
    stmt = conn.createStatement();
    if(stmt.execute("SELECT * FROM problem4_db")){
        rs = stmt.getResultSet();
    }
    while(rs.next()){
        out.println(rs.getString(2));
        out.write("<BR>");
    }
    rs.close();
    stmt.close();
    conn.close();
}
catch(Exception e){
    out.println("rs.next() Error");
    out.println(e.toString());
}

%>
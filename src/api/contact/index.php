<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:GET,POST,OPTIONS,PUT,DELETE');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: my-react-app/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$con = mysqli_connect("localhost","root","","user_db");
$sql = "SELECT First_Name,Last_Name FROM user_details WHERE Username = '".$name."' AND pass = '".$pass."'";
$result = mysqli_query($con,$sql));
$json_array = array();

while($row = mysqli_fetch_assoc($result)) {
    $json_array[] = $row;
}
echo json_decode($json_array);

// if(isset($_POST["username"], $_POST["password"])) {
//     $name = $_POST["username"];
//     $pass = $_POST["password"];

//     $result = mysqli_query($con,$sql));

//     if(mysql_num_rows($result) > 0) {
//         echo $result;
//     }
// }
?>
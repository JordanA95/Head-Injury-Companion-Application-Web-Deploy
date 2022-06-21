<?php
$con = mysqli_connect("headapp.cub20pif3hru.us-east-1.rds.amazonaws.com","admin","headinjuryapp","usernotes");

// get the post records
$notearea = $_POST['notearea'];

// database insert SQL code
$sql = "INSERT INTO `usernote_tbl` ('Note_Content`) VALUES ('notearea')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Note Uploaded";
}

?>
<head>
    <meta http-equiv="refresh" content="0;url=./index.php"> 
</head>
<?php
$score = $_POST['score'];
$name = $_POST['username'];
$dsn = 'mysql:dbname=;host=';
$user = '';
$password = '';

try {
$dbh = new PDO($dsn, $user, $password);

$sql = "INSERT INTO ranking (name, score) VALUES (:name, :score)";
$stmt = $dbh->prepare($sql);
$params = array(':name' => $name, ':score' => $score);
$stmt->execute($params);
} 
catch (PDOException $e) {
echo 'データベースにアクセスできません！' . $e->getMessage();
exit;
}

?>

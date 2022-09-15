<head>
    <meta http-equiv="refresh" content="0;url=./index.php"> 
</head>
<?php
$score = $_POST['score'];
$name = $_POST['username'];
// $dsn = 'mysql:host=mysql632.db.sakura.ne.jp;dbname=sllyun14_miwakunosiro;charset=utf8';
// $user = 'sllyun14';
// $password = 'sql20000114';
$dsn = 'mysql:dbname=miwakunosiro;host=localhost';
$user = 'root';
$password = '';

try {
// PDOインスタンスを生成
$dbh = new PDO($dsn, $user, $password);

$sql = "INSERT INTO ranking (name, score) VALUES (:name, :score)";
// 挿入する値は空のまま、SQL実行の準備をする
$stmt = $dbh->prepare($sql);
 
// 挿入する値を配列に格納する
$params = array(':name' => $name, ':score' => $score);
 
// 挿入する値が入った変数をexecuteにセットしてSQLを実行
$stmt->execute($params);
 
// 登録完了のメッセージ

// エラー（例外）が発生した時の処理を記述

} 
catch (PDOException $e) {
// エラーメッセージを表示させる
echo 'データベースにアクセスできません！' . $e->getMessage();
// 強制終了
exit;
}

?>
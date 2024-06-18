<?php
$servername = "localhost";
$username = "shop"; // Замените на ваше имя пользователя для доступа к MySQL
$password = "Alamira228"; // Замените на ваш пароль для доступа к MySQL
$dbname = "shop"; // Название вашей базы данных

// Создание подключения
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка подключения
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

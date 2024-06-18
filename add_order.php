<?php
include 'db_config.php';

// Получение данных из POST запроса
$item = $_POST['item'];
$quantity = $_POST['quantity'];
$price = $_POST['price'];

// Подготовка SQL запроса для добавления заказа
$sql = "INSERT INTO orders (item, quantity, price) VALUES ('$item', $quantity, $price)";

if ($conn->query($sql) === TRUE) {
    echo "New order added successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

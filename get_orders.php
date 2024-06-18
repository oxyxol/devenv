<?php
include 'db_config.php';

// Запрос к базе данных для получения всех заказов
$sql = "SELECT * FROM orders";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $orders = array();
    while ($row = $result->fetch_assoc()) {
        $orders[] = $row;
    }
    echo json_encode($orders);
} else {
    echo "0 results";
}

$conn->close();
?>

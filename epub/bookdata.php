<?php

$book = json_decode(file_get_contents('51542bf998dee42e4b000000-c28e5ede73bcd1eb82c67b31434d7956.json'));

$components = array();
foreach ($book->components as $component) {
	$components[] = $component->href;
}

echo json_encode($components);
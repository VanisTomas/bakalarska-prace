<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Example e-shop</title>
	<link href="{{ asset('css/app.css') }}" type="text/css" rel="stylesheet">
</head>

<body>
	<noscript>Please enable JavaScript.</noscript>
	<div id="app"></div>
	<script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
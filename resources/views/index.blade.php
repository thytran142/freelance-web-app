<!doctype html>
<html ng-app="app">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="{!! elixir('css/final.css') !!}">
    <link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic'>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <title>Freelance Website App - Provided by 312Geek</title>
    
</head>
<body route-bodyclass>
    <div class="wrapper">
        <div ui-view="layout"></div>
        <div class="control-sidebar-bg"></div>
    </div>
    <script src="{!! elixir('js/final.js') !!}" async defer></script>
</body>
</html>

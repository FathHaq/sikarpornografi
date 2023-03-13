<!DOCTYPE html>
<html>
<head>
    <title>Download your Result in PDF</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.12.1/css/pro.min.css">
    <!-- Scripts -->
</head>
<body>
    <header>
        <h1>Sistem Pakar</h1>
        <h1>Terhadap Kecanduan Pornography</h1>
        <p>Sistem Pakar berbasis Website ini di bangun menggunakan Bahasa pemograman PHP dengan Metode Sistem Pakarnya adalah Certainty Factor.</p>
        <p class="text-right">{{ $date }}</p>
    </header>
  
    <table class="table table-bordered">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
        </tr>
        @foreach($users as $user)
        <tr>
            <td>{{ $user->id }}</td>
            <td>{{ $user->name }}</td>
            <td>{{ $user->email }}</td>
        </tr>
        @endforeach
    </table>
  
</body>
</html>
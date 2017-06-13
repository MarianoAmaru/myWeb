<?php
	$base = mysqli_connect('localhost','alumno7','spLgc19y','wpbda07');	
	if ($base) 
	{   
		$mail =$_POST['email'];
		$nombre =$_POST['nombre'];
		$telefon=$_POST['telefon'];
		$mensaje=$_POST['mensaje'];


	    $query="INSERT INTO `wpbda07`.`Suscriptores_mariano` (`nombre`, `telefono`, `mail`, `mensaje`) VALUES ('".$nombre."','".$telefon."', '".$mail."', '".$mensaje."');";
	    
	    $resultado=mysqli_query($base,$query);
		
		if ($resultado==FALSE)
			{echo "<html>
				<head>
					<style>
						body {
								width: 100%;
								margin: 0 auto;
								font-family: verdana;
								font-weight: thin;
								font-size: 16px;
								background-color:  #0080ff;
								color: white;
							}
						button {
							background-color: #00ffff;
							margin: 10px auto;
							padding: 10px 10px;
							border-radius: 5px;
							border-style: hidden;
							color: white;
							letter-spacing: 1px;
						}
					</style>
				</head>
				<body>
				<h1>La operación no se ha realizado<h1>
				<button><a href='http://srvaulas/alumno7/proyect_final_mariano_2/mariano.html'>Volver</a></button>
				</body>
				</html>";}
		else
			{echo 
				"<html>
				<head>
					<style>
						body {
								width: 100%;
								margin: 0 auto;
								font-family: verdana;
								font-weight: thin;
								font-size: 16px;
								background-color:  #0080ff;
								color: white;
							}
						button {
							background-color: #00ffff;
							margin: 10px auto;
							padding: 10px 10px;
							border-radius: 5px;
							border-style: hidden;
							color: white;
							letter-spacing: 1px;
						}
					</style>
				</head>
				<body>
				<h1>Registro insertado<h1>
				<button><a href='http://srvaulas/alumno7/proyect_final_mariano_2/mariano.html'>Volver</a></button>
				</body>
				</html>	
			";}
	}
	else
		{echo "<html>
				<head>
					<style>
						body {
								width: 100%;
								margin: 0 auto;
								font-family: verdana;
								font-weight: thin;
								font-size: 16px;
								background-color:  #0080ff;
								color: white;
							}
						button {
							background-color: #00ffff;
							margin: 10px auto;
							padding: 10px 10px;
							border-radius: 5px;
							border-style: hidden;
							color: white;
							letter-spacing: 1px;
						}
					</style>
				</head>
				<body>
				<h1>La conexión no ha sido realizada<h1>
				<button><a href='http://srvaulas/alumno7/proyect_final_mariano_2/mariano.html'>Volver</a></button>
				</body>
				</html>";}
?>
<?php 
if(!isset($_GET['src'])){
    die;
}

$src = pathinfo($_GET['src']);
$fileinfos = explode('/',$src['dirname']);
$filename = end($fileinfos).'-'.$src['filename'].'.webp';

header('Content-Type: image/webp');
if(file_exists(__DIR__.'/webpcache/'.$filename) && time()-filemtime(__DIR__.'/webpcache/'.$filename) < 7 * 24 * 3600){
    //Si image déja convertie afficher.
    header('Given-from: Cache');
    echo file_get_contents(__DIR__.'/webpcache/'.$filename);
    die;
}else{
    //Sinon, créer l'image
    header('Given-from: Conversion');
    $webp = convertImageToWebP($_GET['src'],__DIR__.'/webpcache/'.$filename);
    echo $webp;
}
//$filename = $src
//var_dump($src);
//$imageLocation

function convertImageToWebP($source, $destination, $quality=80) {
	$extension = pathinfo($source, PATHINFO_EXTENSION);
	if ($extension == 'jpeg' || $extension == 'jpg') 
		$image = imagecreatefromjpeg($source);
	elseif ($extension == 'gif') 
		$image = imagecreatefromgif($source);
	elseif ($extension == 'png') 
		$image = imagecreatefrompng($source);
	imagewebp($image, $destination, $quality);
    return imagewebp($image, null, $quality);
	
}
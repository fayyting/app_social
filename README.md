# Proje'nin amacı

https://jsonplaceholder.typicode.com apisi üzerinden alınan verileri tabloya işleyerek gerekli sayfalarda gösterilen ReactJS projesidir.

# Proje nasıl kurulur/çalıştırılır?

Projenin github üzerindeki linki kopyalanıp bilgisayarınızda 
> git clone https://github.com/fayyting/app_social.git

ya da ssh için
> git clone git@github.com:fayyting/app_social.git

komutunu çalıştırın.  
> npm install  

komutu çalıştırılır.

Projeyi geliştirme ortamında çalıştırmak için 

> npm run start

komutu çalıştırılır.

## Projeyi Apache üzerinde kurmak

Projenin derlenmiş çıktısını almak için 
> npm run build 

komutunu çalıştırın.
Daha sonra oluşturulan build dizininin içerine ".htaccess" isimli bir dosya oluşturun.
Bu dosyanın içine aşağıdaki satırları ekleyin.

>RewriteEngine On   
>RewriteCond %{REQUEST_FILENAME} !-f  
>RewriteRule ^.*$ index.html [L,QSA]  

## Yapılandırma değerleri

Yapılandırma değeri olarak .env dosyası içinde varsayılan Api URL'si belirtilmiştir. Eğer bu URL yi değiştirmek gerekirse aynı tanım yeni oluşturacağınız ".env.local" isimli dosyada yapılabilir.

## Proje bağımlılıkları

Bu projeyi çalıştırmak için

> npm - 9.2.0
> nodejs - v16.19.0

versiyonu kullanılması tavsiye edilir.
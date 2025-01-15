
<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Welcome to my Incredible Blog

First of all here is the link http://51.250.46.60
Second of all here is how to set this up locally
Requirements:
1. Docker
2. php
3. composer
4. node.js
5. npm
6. git

Execute these wonderful commands in the terminal
```
git clone https://github.com/herman-makarkin/blog.git
cd blog
composer install
npm i
./vendor/bin/sail up # make sure that :80 and :5432 ports are free
./vendor/bin/sail artisan migrate # in a separate window or tab
./vendor/bin/sail artisan db:seed
./vendor/bin/sail artisan storage:link
npm run dev # also in a separate window or tab
```

After that open localhost:80 in your browser
Enjoy!

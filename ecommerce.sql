-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 11, 2024 lúc 06:47 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ecommerce`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Kitchen Utensils'),
(2, 'Home Decor'),
(3, 'Cleaning Supplies'),
(4, 'Appliances'),
(5, 'Furniture'),
(6, 'Bedding'),
(7, 'Cookware'),
(8, 'Storage Solutions'),
(9, 'Electronics'),
(10, 'Toys and Games');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `img` varchar(500) NOT NULL,
  `name` varchar(200) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `img`, `name`, `price`, `description`) VALUES
(1, 'assets/images/product/s328/product-17.webp', '3D Attractive Pot', 90, 'Enhance your living space with this mesmerizing 3D Attractive Pot. Crafted with precision and style, it is sure to be a standout piece in any room. Perfect for adding a touch of sophistication to your home.'),
(2, 'assets/images/product/s328/product-14.webp', 'Abstract Folded Pots', 50, 'Unleash your artistic side with these Abstract Folded Pots. Their unique design and vibrant colors make them a perfect addition to any modern decor. Elevate your space with these eye-catching pots.'),
(3, 'assets/images/product/s328/product-30.webp', 'Adhesive Tape Dispenser', 15, 'Simplify your office life with the Adhesive Tape Dispenser. This sleek and practical dispenser is designed for convenience and efficiency. Keep your workspace organized and efficient with this essential tool.'),
(4, 'assets/images/product/s328/product-9.webp', 'Aluminum Equestrian', 100, 'Add a touch of elegance to your home with the Aluminum Equestrian statue. Crafted from high-quality aluminum, this exquisite piece captures the beauty and grace of equestrian art. A must-have for any horse lover.'),
(5, 'assets/images/product/s328/product-25.webp', 'Antique Sewing Scissors', 15, 'Discover the charm of vintage craftsmanship with these Antique Sewing Scissors. Perfect for crafting and sewing enthusiasts, these scissors combine functionality with a touch of nostalgia. Upgrade your sewing toolkit today.'),
(6, 'assets/images/product/s328/product-1.webp', 'Boho Beard Mug', 45, 'Embrace the bohemian spirit with the Boho Beard Mug. This whimsical mug features a unique beard design, adding character to your morning routine. Enjoy your favorite beverages with a dash of personality.'),
(7, 'assets/images/product/s328/product-31.webp', 'Bouncer Measuring Cup', 150, 'Cook and bake with precision using the Bouncer Measuring Cup. Designed for accuracy and convenience, this measuring cup makes cooking a breeze. Elevate your culinary skills with this essential kitchen tool.'),
(8, 'assets/images/product/s328/product-15.webp', 'Brush & Dustpan Set', 9, 'Keep your space tidy and stylish with the Brush & Dustpan Set. This modern and functional set is perfect for quick cleanups and adds a contemporary touch to your home. Say goodbye to dust and hello to cleanliness.'),
(9, 'assets/images/product/s328/product-12.webp', 'Cape Cottage Playhouse', 35, 'Ignite your child\'s imagination with the Cape Cottage Playhouse. This charming playhouse provides endless hours of fun and adventure. Create magical childhood memories with this delightful play space.'),
(10, 'assets/images/product/s328/product-32.webp', 'Cleaning Dustpan & Brush', 38, 'Make cleaning a breeze with the Cleaning Dustpan & Brush set. Designed for efficiency and durability, this set tackles dust and dirt with ease. Upgrade your cleaning routine with this essential duo.'),
(11, 'assets/images/product/s328/product-6.webp', 'Clear Silicate Teapot', 140, 'Savor the moment with the Clear Silicate Teapot. Crafted from high-quality silicate, this teapot allows you to appreciate the beauty of steeping tea. Elevate your tea-drinking experience with this elegant and transparent teapot.'),
(12, 'assets/images/product/s328/product-19.webp', 'Country Feast Set', 45, 'Transform your dining experience with the Country Feast Set. This rustic and charming set brings warmth to your table, making every meal a delightful occasion. Embrace the simplicity and beauty of country living.'),
(13, 'assets/images/product/s328/product-8.webp', 'Decorative Christmas Fox', 50, 'Celebrate the holiday season with the Decorative Christmas Fox. Adorned with festive details, this charming fox adds a touch of whimsy to your Christmas decor. Spread joy and cheer with this delightful holiday accent.'),
(14, 'assets/images/product/s328/product-28.webp', 'Digital Camera System', 350, 'Capture life\'s precious moments with the Digital Camera System. Packed with advanced features, this camera system ensures stunning photos and videos. Unleash your creativity and document your journey with this cutting-edge technology.'),
(15, 'assets/images/product/s328/product-11.webp', 'Electric Egg Blender', 200, 'Elevate your kitchen with the Electric Egg Blender. Perfect for whipping up delicious treats, this blender combines style and functionality. Effortlessly create culinary masterpieces with this essential kitchen appliance.');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

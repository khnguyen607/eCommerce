<?php

class ProductController extends BaseController
{
    private $productModel;

    public function __construct()
    {
        $this->loadModel('ProductModel');
        $this->productModel = new ProductModel;
    }

    public function index()
    {
        $product = $this->productModel->getAll();
        // Trả về dữ liệu dưới dạng JSON
        header('Content-Type: application/json');
        echo json_encode($product);
    }

    public function search()
    {
        $keyword = $_GET['q'];
        $product = $this->productModel->getProductsByKeyword($keyword);
        // Trả về dữ liệu dưới dạng JSON
        header('Content-Type: application/json');
        echo json_encode($product);
    }
}

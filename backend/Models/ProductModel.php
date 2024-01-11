<?php

class ProductModel extends BaseModel
{
    const TABLE = 'products';

    // ---CÁC PHƯƠNG THỨC CƠ BẢN--- 
    public function getAll($select = ['*'])
    {
        return $this->all(self::TABLE, $select);
    }
    public function findId($id)
    {
        return $this->find(self::TABLE, $id);
    }
    public function edit($id, $data)
    {
        return $this->update(self::TABLE, $id, $data);
    }
    public function delM($id)
    {
        return $this->delete(self::TABLE, $id);
    }
    public function store($data)
    {
        return $this->create(self::TABLE, $data);
    }

    // CÁC PHƯƠNG THỨC BỔ SUNG
    public function getProductsByKeyword($keyword) {
        $table = self::TABLE;
        $sql = "SELECT * FROM $table WHERE LOWER(`name`) LIKE LOWER('%$keyword%')";
        $query = $this->_query($sql);
        $data = [];

        while ($row = mysqli_fetch_assoc($query)) {
            array_push($data, $row);
        }

        return $data;
    }
}

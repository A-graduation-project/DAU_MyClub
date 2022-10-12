# sql 강의 실습
## 1.모든 테이블의 모든 내용 보기
```SQL
SELECT * FROM Customers;      모든 테이블의 모든 내용 보기
```

## 2.원하는 COLUMN(열)만 골라서 보기
```SQL
SELECT CustomerName FROM Customers;
```

주의 SELECT대문자 열 이름 대소문자 적확하게, SELECT뒤가 열 이름 FROM 뒤가 테이블명

```SQL
SELECT EmployeeID, LastName FROM Employees;
```

여러가지 열도 가져올수 있다.
내가 입력할때 employeeid이렇게 쳐도 소문자를 사용하여도 읽을수 있고, 보여줄때 소문자로 보여준다.

```SQL
SELECT categoryid, 'hello', 1,NULL FROM Categories;
```

테이블의 컬럼이 아닌 값도 선택할수 있다.

## 3.원하는 조건의 row(행)만 걸러서 보기
```SQL
SELECT * FROM Orders
WHERE EmployeeID = 3;
```

```SQL
SELECT * FROM OrderDetails 
WHERE Quantity < 5;
```

해당 정보가 들어간 모든 행들을 가져온다.
만약 select 문뒤에 조건이 있으면 정해진 데이터를 뽑아 올수 있을꺼 같다.

## 4.원하는 순서로 데이터 가져오기
+ORDER BY 데이터 정렬
```SQL
SELECT * FROM Customers
ORDER BY ContactName;
```

순서대로 정렬

```SQL
SELECT * FROM OrderDetails
ORDER BY ProductID ASC, Quantity DESC;
```

ASC오름차순 ,DESC 내림차순
위에서 일단 PRODUCTID를 오름차순으로 정렬하고 같은 값을 가진 PRODUCTID끼리는 내림차순으로 정렬한다라는 뜻이다.

## 5.원하는 만큼만 데이터 가져오기
```SQL
SELECT * FROM Customers
LIMIT 10;
```

해당 테이블에서 상위 10개를 순서대로 가져온다.
```SQL
SELECT * FROM Customers
LIMIT 30, 10;
```

이렇게 31번부터 40번까지 10개를 순서대로 가져온다.

* 이렇게 10개씩 20개씩 데이터를 가져올수 있으면 게시판에서 페이지에 게시물을 원하는 갯수를 가져와서 보여줄수 있다.


## 6.원하는 별명(alias)으로 데이터 가져오기
AS를 사용해서 컬럼명을 변경할 수 있다.
```SQL
SELECT
  CustomerId AS ID,
  CustomerName AS NAME,
  Address AS ADDR
FROM Customers;
```

```SQL
SELECT
  CustomerId AS '아이디',
  CustomerName AS '고객명',
  Address AS '주소'
FROM Customers;
```

원하는 데이터를 AS뒤에 내가 설정해둔 이름으로 가져올수 있다.

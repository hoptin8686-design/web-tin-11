import { Question } from "@/lib/types";

// Bài 14: SQL – Ngôn ngữ truy vấn có cấu trúc
export const questions: Question[] = [
  {
    "id": "b14-01",
    "q": "SQL là viết tắt của cụm từ tiếng Anh nào?",
    "options": [
      "Structured Query Language (Ngôn ngữ truy vấn có cấu trúc)",
      "Standard Question Logic (Logic câu hỏi chuẩn)",
      "System Quality Language (Ngôn ngữ chất lượng hệ thống)",
      "Sequential Query List (Danh sách truy vấn tuần tự)"
    ],
    "answer": 0,
    "explain": "SQL là viết tắt của Structured Query Language - ngôn ngữ tiêu chuẩn toàn cầu để giao tiếp với các hệ quản trị CSDL quan hệ."
  },
  {
    "id": "b14-02",
    "q": "Hai nhóm tập con câu lệnh chính của ngôn ngữ SQL bao gồm:",
    "options": [
      "DDL (Ngôn ngữ định nghĩa dữ liệu) và DML (Ngôn ngữ thao tác dữ liệu)",
      "HTML và CSS",
      "Python và Java",
      "Windows và Linux"
    ],
    "answer": 0,
    "explain": "SQL gồm 2 nhóm chính: DDL (Data Definition Language: CREATE, ALTER, DROP) và DML (Data Manipulation Language: SELECT, INSERT, UPDATE, DELETE)."
  },
  {
    "id": "b14-03",
    "q": "Câu lệnh SQL nào sau đây thuộc nhóm Ngôn ngữ định nghĩa dữ liệu (DDL)?",
    "options": [
      "CREATE TABLE",
      "SELECT",
      "INSERT INTO",
      "UPDATE"
    ],
    "answer": 0,
    "explain": "CREATE TABLE dùng để định nghĩa cấu trúc bảng mới, thuộc nhóm DDL."
  },
  {
    "id": "b14-04",
    "q": "Câu lệnh SQL nào dùng để trích xuất, truy vấn dữ liệu từ một hoặc nhiều bảng?",
    "options": [
      "SELECT",
      "INSERT",
      "DELETE",
      "DROP"
    ],
    "answer": 0,
    "explain": "SELECT là câu lệnh cốt lõi và phổ biến nhất của SQL dùng để lọc và trích xuất dữ liệu."
  },
  {
    "id": "b14-05",
    "q": "Cú pháp cơ bản của một câu lệnh SELECT trong SQL là:",
    "options": [
      "SELECT <danh_sách_cột> FROM <tên_bảng> WHERE <điều_kiện>;",
      "GET <danh_sách_cột> IN <tên_bảng>;",
      "FIND <tên_bảng> WHERE <cột>;",
      "EXTRACT <tên_bảng> FROM <cột>;"
    ],
    "answer": 0,
    "explain": "Cấu trúc chuẩn của lệnh truy vấn SQL: SELECT (chọn cột) FROM (từ bảng nào) WHERE (điều kiện lọc)."
  },
  {
    "id": "b14-06",
    "q": "Ký tự dấu sao (*) trong câu lệnh 'SELECT * FROM HOC_SINH;' có ý nghĩa gì?",
    "options": [
      "Lấy ra TẤT CẢ các cột thuộc tính có trong bảng HOC_SINH",
      "Chỉ lấy ra cột đầu tiên của bảng",
      "Xóa sạch toàn bộ bảng HOC_SINH",
      "Nhân đôi số lượng hàng của bảng"
    ],
    "answer": 0,
    "explain": "Dấu sao (*) là ký tự đại diện cho toàn bộ các cột trong bảng."
  },
  {
    "id": "b14-07",
    "q": "Mệnh đề nào trong câu lệnh SELECT dùng để chỉ định điều kiện lọc dữ liệu?",
    "options": [
      "WHERE",
      "FROM",
      "ORDER BY",
      "GROUP BY"
    ],
    "answer": 0,
    "explain": "Mệnh đề WHERE chứa biểu thức logic lọc các hàng thỏa mãn điều kiện."
  },
  {
    "id": "b14-08",
    "q": "Để sắp xếp kết quả truy vấn theo thứ tự GIẢM DẦN của điểm số, ta dùng từ khóa nào sau tên cột trong mệnh đề ORDER BY?",
    "options": [
      "DESC",
      "ASC",
      "DOWN",
      "REDUCE"
    ],
    "answer": 0,
    "explain": "DESC (Descending) sắp xếp giảm dần; ASC (Ascending) sắp xếp tăng dần."
  },
  {
    "id": "b14-09",
    "q": "Câu lệnh nào sau đây dùng để chèn thêm một bản ghi mới vào bảng dữ liệu?",
    "options": [
      "INSERT INTO",
      "ADD NEW",
      "CREATE ROW",
      "APPEND TO"
    ],
    "answer": 0,
    "explain": "Cú pháp INSERT INTO <tên_bảng> VALUES (...) dùng để thêm bản ghi mới."
  },
  {
    "id": "b14-10",
    "q": "Để chỉnh sửa, thay đổi dữ liệu của các bản ghi đã có trong bảng, ta dùng câu lệnh nào?",
    "options": [
      "UPDATE",
      "MODIFY",
      "CHANGE",
      "ALTER"
    ],
    "answer": 0,
    "explain": "Cú pháp: UPDATE <tên_bảng> SET <cột> = <giá_trị> WHERE <điều_kiện>."
  },
  {
    "id": "b14-11",
    "q": "Điều gì cực kỳ NGUY HIỂM sẽ xảy ra nếu thực hiện câu lệnh 'DELETE FROM HOC_SINH;' mà quên không viết mệnh đề WHERE?",
    "options": [
      "Toàn bộ tất cả các bản ghi dữ liệu trong bảng HOC_SINH sẽ bị xóa sạch hoàn toàn",
      "Chỉ duy nhất hàng đầu tiên bị xóa",
      "Hệ thống sẽ từ chối và báo lỗi cú pháp",
      "Không có chuyện gì xảy ra"
    ],
    "answer": 0,
    "explain": "Lệnh DELETE không có WHERE sẽ quét và xóa sạch mọi hàng trong bảng, gây mất mát dữ liệu nghiêm trọng!"
  },
  {
    "id": "b14-12",
    "q": "Tương tự, điều gì sẽ xảy ra nếu chạy câu lệnh 'UPDATE HOC_SINH SET Diem = 10;' mà không có mệnh đề WHERE?",
    "options": [
      "Tất cả học sinh trong toàn bộ bảng đều bị đổi điểm thành 10",
      "Chỉ học sinh giỏi nhất mới được đổi điểm",
      "Hệ thống tự động hủy thao tác",
      "Điểm của học sinh tự động trở về 0"
    ],
    "answer": 0,
    "explain": "Thiếu WHERE trong lệnh UPDATE sẽ áp dụng giá trị mới cho toàn bộ các hàng trong bảng."
  },
  {
    "id": "b14-13",
    "q": "Toán tử so sánh nào trong SQL dùng để kiểm tra giá trị có nằm trong một khoảng kín [a, b] hay không?",
    "options": [
      "BETWEEN ... AND ...",
      "INSIDE ... TO ...",
      "FROM ... UNTIL ...",
      "RANGE ... WITH ..."
    ],
    "answer": 0,
    "explain": "Cú pháp: WHERE Diem BETWEEN 8.0 AND 10.0 (tương đương Diem >= 8.0 AND Diem <= 10.0)."
  },
  {
    "id": "b14-14",
    "q": "Để tìm kiếm các học sinh có họ tên BẮT ĐẦU bằng chữ cái 'N' (ví dụ Nam, Nga, Ninh), ta sử dụng toán tử so khớp mẫu nào?",
    "options": [
      "WHERE HoTen LIKE 'N%'",
      "WHERE HoTen = 'N*'",
      "WHERE HoTen START WITH 'N'",
      "WHERE HoTen IN ('N')"
    ],
    "answer": 0,
    "explain": "Toán tử LIKE kết hợp ký tự phần trăm (%) đại diện cho chuỗi ký tự bất kỳ: 'N%' so khớp các chuỗi bắt đầu bằng chữ N."
  },
  {
    "id": "b14-15",
    "q": "Trong toán tử LIKE của SQL, ký tự gạch dưới (_) đại diện cho:",
    "options": [
      "Đúng một ký tự đơn bất kỳ tại vị trí đó",
      "Một chuỗi ký tự dài bất kỳ",
      "Số không (0)",
      "Dấu cách khoảng trắng"
    ],
    "answer": 0,
    "explain": "Ký tự gạch dưới (_) trong mẫu so khớp LIKE đại diện cho duy nhất một ký tự bất kỳ."
  },
  {
    "id": "b14-16",
    "q": "Hàm tổng hợp nào trong SQL dùng để đếm tổng số lượng bản ghi thỏa mãn điều kiện?",
    "options": [
      "COUNT()",
      "SUM()",
      "TOTAL()",
      "NUMBER()"
    ],
    "answer": 0,
    "explain": "COUNT(*) hoặc COUNT(cột) đếm số lượng hàng thỏa mãn câu truy vấn."
  },
  {
    "id": "b14-17",
    "q": "Hàm tổng hợp nào dùng để tính giá trị trung bình của một cột dữ liệu kiểu số trong SQL?",
    "options": [
      "AVG()",
      "MEAN()",
      "AVERAGE()",
      "SUM()"
    ],
    "answer": 0,
    "explain": "AVG() (Average) tính giá trị trung bình cộng của các giá trị trong cột số."
  },
  {
    "id": "b14-18",
    "q": "Mệnh đề GROUP BY trong câu lệnh SELECT dùng để làm gì?",
    "options": [
      "Nhóm các hàng có cùng giá trị ở một hoặc nhiều cột lại với nhau để thực hiện các hàm tổng hợp (như COUNT, SUM, AVG)",
      "Sắp xếp kết quả theo thứ tự bảng chữ cái",
      "Xóa các hàng có dữ liệu trùng lặp",
      "Đổi tên bảng dữ liệu"
    ],
    "answer": 0,
    "explain": "GROUP BY gom nhóm dữ liệu theo phân loại (ví dụ nhóm theo MaLop để đếm số học sinh của từng lớp)."
  },
  {
    "id": "b14-19",
    "q": "Để đặt điều kiện lọc trên các giá trị ĐÃ ĐƯỢC TỔNG HỢP sau mệnh đề GROUP BY, ta phải sử dụng mệnh đề nào?",
    "options": [
      "HAVING",
      "WHERE",
      "ORDER BY",
      "LIMIT"
    ],
    "answer": 0,
    "explain": "WHERE lọc trên từng hàng thô trước khi nhóm; HAVING lọc trên kết quả tổng hợp của các nhóm (ví dụ: HAVING COUNT(*) > 30)."
  },
  {
    "id": "b14-20",
    "q": "Câu lệnh nào sau đây dùng để xóa vĩnh viễn cấu trúc của cả một bảng dữ liệu cùng toàn bộ dữ liệu bên trong ra khỏi CSDL?",
    "options": [
      "DROP TABLE <tên_bảng>;",
      "DELETE TABLE <tên_bảng>;",
      "REMOVE TABLE <tên_bảng>;",
      "CLEAR TABLE <tên_bảng>;"
    ],
    "answer": 0,
    "explain": "DROP TABLE xóa cả cấu trúc lẫn dữ liệu của bảng khỏi CSDL (DELETE chỉ xóa dữ liệu hàng, giữ lại khung bảng)."
  },
  {
    "id": "b14-21",
    "q": "Mệnh đề nào dùng để kết hợp dữ liệu từ hai bảng lại với nhau dựa trên điều kiện so khớp khóa?",
    "options": [
      "INNER JOIN ... ON ...",
      "ATTACH ... WITH ...",
      "MERGE ... INTO ...",
      "CONNECT ... BY ..."
    ],
    "answer": 0,
    "explain": "INNER JOIN kết hợp các hàng từ hai bảng khi có sự khớp giá trị giữa cột khóa ngoài và khóa chính."
  },
  {
    "id": "b14-22",
    "q": "Toán tử 'IN' trong mệnh đề WHERE có tác dụng gì?",
    "options": [
      "Kiểm tra giá trị của cột có thuộc về một danh sách các giá trị chỉ định sẵn hay không",
      "In tài liệu ra máy in giấy",
      "Nhập dữ liệu từ bàn phím",
      "Chuyển đổi kiểu dữ liệu thành số nguyên"
    ],
    "answer": 0,
    "explain": "Ví dụ: WHERE MaLop IN ('11A1', '11A2', '11A3') tương đương kiểm tra thuộc tập hợp các lớp trên."
  },
  {
    "id": "b14-23",
    "q": "Để loại bỏ các hàng trùng lặp hoàn toàn trong kết quả hiển thị của câu lệnh SELECT, ta dùng từ khóa nào?",
    "options": [
      "DISTINCT",
      "UNIQUE",
      "DIFFERENT",
      "SINGLE"
    ],
    "answer": 0,
    "explain": "Cú pháp: SELECT DISTINCT QueQuan FROM HOC_SINH; chỉ hiển thị danh sách các quê quán không trùng nhau."
  },
  {
    "id": "b14-24",
    "q": "Câu lệnh SQL kết thúc bằng ký tự nào theo quy ước tiêu chuẩn?",
    "options": [
      "Dấu chấm phẩy (;)",
      "Dấu hai chấm (:)",
      "Dấu chấm (.)",
      "Dấu chấm than (!)"
    ],
    "answer": 0,
    "explain": "Dấu chấm phẩy (;) là ký hiệu phân tách kết thúc câu lệnh chuẩn trong SQL."
  }
];

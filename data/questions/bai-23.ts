import { Question } from "@/lib/types";

// Bài 23: Thực hành truy xuất dữ liệu qua liên kết các bảng
export const questions: Question[] = [
  {
    "id": "b23-01",
    "q": "Phép nối bảng cơ bản nào trong SQL chỉ trả về các bản ghi có giá trị khớp nhau ở cả hai bảng liên kết?",
    "options": [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL OUTER JOIN"
    ],
    "answer": 0,
    "explain": "INNER JOIN (nối trong) chỉ giữ lại các dòng mà điều kiện nối ở cả hai bảng đều thỏa mãn (khớp giá trị)."
  },
  {
    "id": "b23-02",
    "q": "Mệnh đề nào trong câu lệnh SQL xác định điều kiện để nối hai bảng lại với nhau sau từ khóa JOIN?",
    "options": [
      "WHERE",
      "ON",
      "HAVING",
      "GROUP BY"
    ],
    "answer": 1,
    "explain": "Mệnh đề ON chỉ định điều kiện nối trường dữ liệu giữa hai bảng, ví dụ: ON bannhac.idCasi = casi.idCasi."
  },
  {
    "id": "b23-03",
    "q": "Cho câu lệnh: SELECT bannhac.tenBannhac, casi.tenCasi FROM bannhac INNER JOIN casi ON bannhac.idCasi = casi.idCasi; Kết quả trả về là gì?",
    "options": [
      "Danh sách toàn bộ ca sĩ bất kể có bài hát hay không",
      "Danh sách tên bài hát kèm theo tên ca sĩ tương ứng biểu diễn",
      "Tổng số bài hát của mỗi ca sĩ",
      "Danh sách các bài hát chưa có người hát"
    ],
    "answer": 1,
    "explain": "Câu lệnh lấy ra tên bài hát và tên ca sĩ tương ứng thông qua phép nối INNER JOIN dựa trên idCasi."
  },
  {
    "id": "b23-04",
    "q": "Phép nối LEFT JOIN khác INNER JOIN ở điểm mấu chốt nào?",
    "options": [
      "LEFT JOIN chỉ lấy các bản ghi ở bảng bên phải",
      "LEFT JOIN giữ lại toàn bộ bản ghi ở bảng bên trái, nếu bảng bên phải không có bản ghi khớp thì điền NULL",
      "LEFT JOIN chạy chậm hơn gấp 10 lần trong mọi tình huống",
      "LEFT JOIN không cần mệnh đề ON"
    ],
    "answer": 1,
    "explain": "LEFT JOIN giữ lại tất cả các dòng từ bảng bên trái (bảng đầu tiên sau FROM), các trường từ bảng bên phải không khớp sẽ mang giá trị NULL."
  },
  {
    "id": "b23-05",
    "q": "Để nối đồng thời 3 bảng: bannhac, casi và nhacsi trong cùng một câu lệnh SELECT, ta sử dụng cú pháp nào?",
    "options": [
      "SELECT ... FROM bannhac JOIN casi JOIN nhacsi;",
      "SELECT ... FROM bannhac INNER JOIN casi ON bannhac.idCasi = casi.idCasi INNER JOIN nhacsi ON bannhac.idNhacsi = nhacsi.idNhacsi;",
      "SELECT ... FROM bannhac, casi, nhacsi WHERE id = id;",
      "SELECT ... FROM bannhac CONNECT casi CONNECT nhacsi;"
    ],
    "answer": 1,
    "explain": "Mỗi phép nối bảng cần một từ khóa JOIN kèm mệnh đề điều kiện nối ON tương ứng."
  },
  {
    "id": "b23-06",
    "q": "Trong SQL, việc sử Bí danh bảng (Alias) bằng từ khóa AS (ví dụ: FROM bannhac AS b) nhằm mục đích gì?",
    "options": [
      "Tăng cường bảo mật CSDL khỏi tấn công",
      "Viết tên bảng ngắn gọn hơn, giúp câu truy vấn dễ đọc và tránh nhầm lẫn tên cột",
      "Tạo ra một bảng mới trên ổ cứng máy tính",
      "Bắt buộc để SQL có thể biên dịch"
    ],
    "answer": 1,
    "explain": "Bí danh bảng giúp viết ngắn gọn mã truy vấn (ví dụ b.tenBannhac thay vì bannhac.tenBannhac)."
  },
  {
    "id": "b23-07",
    "q": "Hàm tổng hợp nào sau đây dùng để đếm số lượng bản ghi trong một nhóm dữ liệu?",
    "options": [
      "SUM()",
      "COUNT()",
      "AVG()",
      "TOTAL()"
    ],
    "answer": 1,
    "explain": "Hàm COUNT() đếm số lượng dòng/bản ghi thỏa mãn điều kiện hoặc trong từng nhóm."
  },
  {
    "id": "b23-08",
    "q": "Khi muốn thống kê số lượng bài hát của từng ca sĩ, mệnh đề nào sau đây là bắt buộc phải có?",
    "options": [
      "ORDER BY",
      "GROUP BY",
      "LIMIT",
      "DISTINCT"
    ],
    "answer": 1,
    "explain": "Mệnh đề GROUP BY nhóm các dòng dữ liệu có cùng giá trị (ở đây là theo ca sĩ) để áp dụng hàm tổng hợp COUNT()."
  },
  {
    "id": "b23-09",
    "q": "Sự khác biệt giữa mệnh đề WHERE và HAVING trong câu lệnh truy vấn có nhóm dữ liệu là gì?",
    "options": [
      "WHERE lọc điều kiện trên từng bản ghi trước khi nhóm; HAVING lọc điều kiện trên kết quả của hàm nhóm (sau khi GROUP BY)",
      "WHERE chỉ dùng cho số, HAVING chỉ dùng cho văn bản",
      "Hai mệnh đề hoàn toàn tương đương và thay thế được cho nhau",
      "HAVING đặt trước WHERE trong cú pháp SQL"
    ],
    "answer": 0,
    "explain": "WHERE lọc các bản ghi thô trước khi gom nhóm, còn HAVING lọc các nhóm dữ liệu dựa trên kết quả tính toán của hàm tổng hợp."
  },
  {
    "id": "b23-10",
    "q": "Để tìm những ca sĩ có từ 3 bài hát trở lên trong CSDL, câu lệnh nào sau đây là đúng?",
    "options": [
      "SELECT tenCasi, COUNT(idBannhac) FROM ... GROUP BY tenCasi WHERE COUNT(idBannhac) >= 3;",
      "SELECT tenCasi, COUNT(idBannhac) FROM ... GROUP BY tenCasi HAVING COUNT(idBannhac) >= 3;",
      "SELECT tenCasi, COUNT(idBannhac) FROM ... WHERE tenCasi >= 3;",
      "SELECT tenCasi FROM casi ORDER BY 3;"
    ],
    "answer": 1,
    "explain": "Điều kiện lọc kết quả hàm nhóm COUNT(idBannhac) >= 3 phải đặt trong mệnh đề HAVING."
  },
  {
    "id": "b23-11",
    "q": "Mệnh đề ORDER BY tenBannhac DESC có tác dụng gì đối với kết quả truy vấn?",
    "options": [
      "Sắp xếp danh sách tên bài hát theo thứ tự tăng dần (A -> Z)",
      "Sắp xếp danh sách tên bài hát theo thứ tự giảm dần (Z -> A)",
      "Lọc bỏ các bài hát trùng lặp",
      "Đổi tên bài hát thành chữ hoa"
    ],
    "answer": 1,
    "explain": "DESC là viết tắt của Descending (sắp xếp giảm dần từ Z đến A hoặc từ lớn đến bé)."
  },
  {
    "id": "b23-12",
    "q": "Nếu hai bảng có cùng tên cột là 'id', khi viết trong mệnh đề SELECT ta phải làm gì để tránh lỗi nhập nhằng (ambiguous column)?",
    "options": [
      "Đổi tên một cột trong CSDL gốc",
      "Ghi rõ tên bảng trước tên cột theo dạng: TenBang.TenCot (ví dụ casi.id, bannhac.id)",
      "Xóa bớt một bảng khỏi câu truy vấn",
      "Đặt tên cột trong dấu ngoặc đơn"
    ],
    "answer": 1,
    "explain": "Sử dụng cú pháp TenBang.TenCot hoặc BiDanh.TenCot để chỉ rõ cột thuộc bảng nào nhằm định danh tường minh."
  },
  {
    "id": "b23-13",
    "q": "Câu lệnh: SELECT DISTINCT idNhacsi FROM bannhac; trả về kết quả gì?",
    "options": [
      "Danh sách tất cả mã nhạc sĩ kể cả trùng lặp",
      "Danh sách các mã nhạc sĩ duy nhất (đã loại bỏ trùng lặp) có bài hát trong bảng bannhac",
      "Tổng số nhạc sĩ có trong CSDL",
      "Nhạc sĩ có bài hát nổi tiếng nhất"
    ],
    "answer": 1,
    "explain": "Từ khóa DISTINCT loại bỏ các giá trị trùng lặp trong tập kết quả trả về."
  },
  {
    "id": "b23-14",
    "q": "Khi thực hiện nối hai bảng mà không có mệnh đề ON chỉ định điều kiện nối, kết quả thu được sẽ là gì?",
    "options": [
      "Báo lỗi cú pháp ngay lập tức",
      "Tích Descartes (Cartesian product) ghép mỗi dòng của bảng này với toàn bộ các dòng của bảng kia",
      "Bảng kết quả rỗng không có dữ liệu",
      "Tự động nối theo cột đầu tiên của mỗi bảng"
    ],
    "answer": 1,
    "explain": "Nếu thiếu điều kiện nối, hệ thống sẽ sinh ra tích Descartes ghép từng hàng của bảng 1 với mọi hàng của bảng 2."
  },
  {
    "id": "b23-15",
    "q": "Để tìm các bài hát có tên chứa chữ 'Hà Nội', ta dùng điều kiện nào trong mệnh đề WHERE?",
    "options": [
      "tenBannhac = 'Hà Nội'",
      "tenBannhac LIKE '%Hà Nội%'",
      "tenBannhac IN ('Hà Nội')",
      "tenBannhac MATCH 'Hà Nội'"
    ],
    "answer": 1,
    "explain": "Toán tử LIKE kết hợp ký tự đại diện '%' ở cả hai đầu cho phép tìm chuỗi con bất kỳ chứa cụm từ cần tìm."
  },
  {
    "id": "b23-16",
    "q": "Trong câu truy vấn SQL: SELECT c.tenCasi, COUNT(b.idBannhac) AS SoLuong FROM casi c LEFT JOIN bannhac b ON c.idCasi = b.idCasi GROUP BY c.idCasi; Nếu một ca sĩ chưa có bài hát nào, cột SoLuong sẽ có giá trị là bao nhiêu?",
    "options": [
      "1",
      "0",
      "NULL",
      "Báo lỗi hệ thống"
    ],
    "answer": 1,
    "explain": "Hàm COUNT(b.idBannhac) đếm số giá trị không phải NULL, do đó khi LEFT JOIN không có bài hát (b.idBannhac là NULL) thì COUNT sẽ trả về 0."
  },
  {
    "id": "b23-17",
    "q": "Từ khóa LIMIT 5 ở cuối câu lệnh SELECT trong MySQL có tác dụng gì?",
    "options": [
      "Giới hạn thời gian chạy câu lệnh là 5 giây",
      "Chỉ hiển thị tối đa 5 dòng kết quả đầu tiên của truy vấn",
      "Tăng dung lượng bộ đệm lên 5 MB",
      "Lọc các bài hát có độ dài từ 5 phút trở lên"
    ],
    "answer": 1,
    "explain": "Mệnh đề LIMIT n giới hạn số dòng kết quả trả về hiển thị cho người dùng."
  },
  {
    "id": "b23-18",
    "q": "Để lấy danh sách các ca sĩ KHÔNG có bất kỳ bài hát nào trong bảng bannhac, ta kết hợp LEFT JOIN với điều kiện nào?",
    "options": [
      "WHERE bannhac.idBannhac = 0",
      "WHERE bannhac.idBannhac IS NULL",
      "WHERE bannhac.idBannhac != NULL",
      "WHERE casi.idCasi IS NULL"
    ],
    "answer": 1,
    "explain": "Khi LEFT JOIN bảng casi với bannhac, những ca sĩ chưa có bài hát sẽ có cột bannhac.idBannhac mang giá trị NULL, lọc bằng IS NULL."
  },
  {
    "id": "b23-19",
    "q": "Hàm nào sau đây tính giá trị trung bình của một cột dữ liệu số?",
    "options": [
      "AVERAGE()",
      "AVG()",
      "MEAN()",
      "MEDIAN()"
    ],
    "answer": 1,
    "explain": "Trong SQL chuẩn, hàm AVG() được dùng để tính trung bình cộng giá trị của cột."
  },
  {
    "id": "b23-20",
    "q": "Thứ tự thực thi logic cơ bản của các mệnh đề trong một câu truy vấn SQL đầy đủ là gì?",
    "options": [
      "SELECT -> FROM -> WHERE -> GROUP BY -> ORDER BY",
      "FROM / JOIN -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT",
      "ORDER BY -> SELECT -> FROM -> WHERE",
      "LIMIT -> SELECT -> FROM -> WHERE"
    ],
    "answer": 1,
    "explain": "Hệ QTCSDL trước tiên xác định nguồn dữ liệu (FROM/JOIN), lọc dòng (WHERE), nhóm (GROUP BY), lọc nhóm (HAVING), chọn cột (SELECT), sắp xếp (ORDER BY) và giới hạn (LIMIT)."
  },
  {
    "id": "b23-21",
    "q": "Khi thực hiện câu lệnh truy vấn trong HeidiSQL, kết quả truy vấn được hiển thị ở đâu?",
    "options": [
      "Trong một file Notepad tự động mở ra",
      "Ở lưới kết quả (Result grid) nằm ngay bên dưới tab soạn thảo câu lệnh Query",
      "Trong thanh trạng thái ở góc dưới bên phải",
      "Chỉ được lưu vào ổ đĩa mà không hiển thị ra màn hình"
    ],
    "answer": 1,
    "explain": "HeidiSQL hiển thị bảng kết quả truy vấn ở phần lưới bên dưới cửa sổ soạn thảo lệnh SQL."
  },
  {
    "id": "b23-22",
    "q": "Toán tử nào được dùng để kiểm tra một giá trị có nằm trong một tập hợp các giá trị xác định hay không?",
    "options": [
      "BETWEEN",
      "IN",
      "LIKE",
      "EXISTS"
    ],
    "answer": 1,
    "explain": "Toán tử IN (ví dụ WHERE idNhacsi IN (1, 3, 5)) lọc các dòng có giá trị thuộc danh sách liệt kê."
  },
  {
    "id": "b23-23",
    "q": "Nếu muốn sắp xếp kết quả theo tên ca sĩ tăng dần, nếu trùng tên thì sắp xếp theo tên bài hát giảm dần, mệnh đề ORDER BY viết thế nào?",
    "options": [
      "ORDER BY tenCasi ASC AND tenBannhac DESC",
      "ORDER BY tenCasi ASC, tenBannhac DESC",
      "ORDER BY tenCasi, tenBannhac ALL",
      "ORDER BY tenCasi UP, tenBannhac DOWN"
    ],
    "answer": 1,
    "explain": "Các tiêu chí sắp xếp được ngăn cách nhau bằng dấu phẩy: ORDER BY tenCasi ASC, tenBannhac DESC."
  },
  {
    "id": "b23-24",
    "q": "Một câu lệnh truy vấn liên kết bảng chạy rất chậm khi CSDL có hàng triệu dòng. Giải pháp kỹ thuật quan trọng nhất để tăng tốc là gì?",
    "options": [
      "Đổi màu chữ giao diện HeidiSQL",
      "Tạo chỉ mục (Index) trên các cột tham gia vào điều kiện nối (khóa ngoại và khóa chính)",
      "Chuyển toàn bộ câu lệnh sang chữ thường",
      "Giảm dung lượng RAM máy tính"
    ],
    "answer": 1,
    "explain": "Tạo Index trên các cột liên kết (khóa ngoại) giúp hệ QTCSDL tìm kiếm và ghép nối các bản ghi cực kỳ nhanh chóng."
  }
];

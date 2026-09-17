import { Question } from "@/lib/types";

// Bài 21: Thực hành cập nhật và truy xuất dữ liệu các bảng đơn giản
export const questions: Question[] = [
  {
    "id": "b21-01",
    "q": "Trong phần mềm HeidiSQL, thẻ nào cho phép người dùng xem dữ liệu dưới dạng bảng tính trực quan và nhập trực tiếp các bản ghi mới?",
    "options": [
      "Thẻ 'Data'",
      "Thẻ 'Table'",
      "Thẻ 'Host'",
      "Thẻ 'Query'"
    ],
    "answer": 0,
    "explain": "Thẻ Data hiển thị dữ liệu bảng dạng lưới trực quan cho phép thêm, sửa, xóa trực tiếp."
  },
  {
    "id": "b21-02",
    "q": "Để thêm một hàng bản ghi mới trực tiếp trong thẻ Data của HeidiSQL, người dùng có thể làm gì?",
    "options": [
      "Nhấn phím Insert trên bàn phím (hoặc nhấp đúp chuột vào hàng trống có dấu sao ở cuối bảng)",
      "Nhấn tổ hợp phím Ctrl + Alt + Delete",
      "Tắt màn hình máy tính",
      "Khởi động lại phần mềm XAMPP"
    ],
    "answer": 0,
    "explain": "Phím Insert hoặc nhấp chuột vào dòng cuối cùng có dấu sao (*) để thêm một bản ghi mới."
  },
  {
    "id": "b21-03",
    "q": "Khi chèn một bản ghi mới vào bảng `casi` có cột `idCasi` là AUTO_INCREMENT, người dùng cần nhập dữ liệu cho cột `idCasi` như thế nào?",
    "options": [
      "Để trống không cần nhập (hoặc để mặc định), hệ thống MySQL sẽ tự động điền số thứ tự tăng dần",
      "Bắt buộc phải gõ số 1000",
      "Phải gõ một đoạn văn dài",
      "Phải điền ngày tháng năm sinh"
    ],
    "answer": 0,
    "explain": "Cột Auto-increment tự sinh giá trị tăng dần, người dùng chỉ cần nhập dữ liệu cho cột tenCasi."
  },
  {
    "id": "b21-04",
    "q": "Câu lệnh SQL nào dùng để chèn thêm 3 ca sĩ mới vào bảng `casi` cùng một lúc?",
    "options": [
      "INSERT INTO casi (tenCasi) VALUES ('Trọng Tấn'), ('Đăng Dương'), ('Việt Hoàn');",
      "ADD INTO casi ('Trọng Tấn', 'Đăng Dương', 'Việt Hoàn');",
      "SELECT casi VALUES ('Trọng Tấn', 'Đăng Dương', 'Việt Hoàn');",
      "UPDATE casi SET tenCasi = 'Trọng Tấn', 'Đăng Dương', 'Việt Hoàn';"
    ],
    "answer": 0,
    "explain": "Cú pháp INSERT INTO ... VALUES (...), (...), (...); cho phép chèn nhiều bản ghi cùng lúc rất nhanh chóng."
  },
  {
    "id": "b21-05",
    "q": "Để chỉnh sửa giá trị nghệ danh của một ca sĩ bị gõ sai chính tả trong thẻ Data của HeidiSQL, thao tác trực quan là:",
    "options": [
      "Nhấp đúp chuột vào ô cần sửa, gõ lại tên chính xác rồi nhấn phím Enter (hoặc nhấp chuột sang dòng khác)",
      "Xóa bỏ toàn bộ bảng casi đi tạo lại",
      "Rút phích cắm nguồn máy tính",
      "Gõ lại từ đầu tất cả các hàng trong bảng"
    ],
    "answer": 0,
    "explain": "Sửa trực tiếp trên ô lưới dữ liệu giống hệt như thao tác trong phần mềm bảng tính Excel."
  },
  {
    "id": "b21-06",
    "q": "Câu lệnh SQL nào sau đây thực hiện sửa tên ca sĩ có mã `idCasi = 1` thành 'Mỹ Tâm'?",
    "options": [
      "UPDATE casi SET tenCasi = 'Mỹ Tâm' WHERE idCasi = 1;",
      "MODIFY casi SET tenCasi = 'Mỹ Tâm';",
      "CHANGE casi tenCasi = 'Mỹ Tâm' FOR idCasi = 1;",
      "UPDATE casi tenCasi = 'Mỹ Tâm' IN 1;"
    ],
    "answer": 0,
    "explain": "Cú pháp chuẩn: UPDATE <tên_bảng> SET <cột> = <giá_trị_mới> WHERE <điều_kiện>;"
  },
  {
    "id": "b21-07",
    "q": "Để xóa một bản ghi ca sĩ có mã `idCasi = 5` bằng câu lệnh SQL, ta viết:",
    "options": [
      "DELETE FROM casi WHERE idCasi = 5;",
      "REMOVE FROM casi WHERE idCasi = 5;",
      "DROP FROM casi WHERE idCasi = 5;",
      "CLEAR casi WHERE idCasi = 5;"
    ],
    "answer": 0,
    "explain": "Cú pháp chuẩn: DELETE FROM <tên_bảng> WHERE <điều_kiện>;"
  },
  {
    "id": "b21-08",
    "q": "Câu lệnh SQL nào sau đây dùng để hiển thị toàn bộ danh sách tất cả các ca sĩ có trong bảng `casi`?",
    "options": [
      "SELECT * FROM casi;",
      "GET ALL FROM casi;",
      "SHOW DATA IN casi;",
      "FIND * IN casi;"
    ],
    "answer": 0,
    "explain": "SELECT * FROM casi; trích xuất tất cả các cột và tất cả các dòng của bảng."
  },
  {
    "id": "b21-09",
    "q": "Để tìm kiếm tất cả các ca sĩ có tên bắt đầu bằng chữ cái 'T' (ví dụ Tùng Dương, Trọng Tấn, Thu Minh), câu lệnh SQL là:",
    "options": [
      "SELECT * FROM casi WHERE tenCasi LIKE 'T%';",
      "SELECT * FROM casi WHERE tenCasi = 'T*';",
      "SELECT * FROM casi WHERE tenCasi START 'T';",
      "SELECT * FROM casi WHERE tenCasi IN ('T');"
    ],
    "answer": 0,
    "explain": "Toán tử LIKE kết hợp 'T%' lọc các chuỗi ký tự bắt đầu bằng chữ T."
  },
  {
    "id": "b21-10",
    "q": "Để hiển thị danh sách các ca sĩ được sắp xếp theo thứ tự bảng chữ cái A-Z của tên ca sĩ, ta viết:",
    "options": [
      "SELECT * FROM casi ORDER BY tenCasi ASC;",
      "SELECT * FROM casi ORDER BY tenCasi DESC;",
      "SELECT * FROM casi SORT BY tenCasi;",
      "SELECT * FROM casi GROUP BY tenCasi;"
    ],
    "answer": 0,
    "explain": "ORDER BY tenCasi ASC (hoặc mặc định bỏ chữ ASC) sắp xếp tăng dần theo bảng chữ cái."
  },
  {
    "id": "b21-11",
    "q": "Trong thẻ Data của HeidiSQL, tính năng 'Quick filter' (Lọc nhanh) ở thanh công cụ phía trên giúp người dùng:",
    "options": [
      "Gõ nhanh một từ khóa để lọc các hàng dữ liệu hiển thị trên màn hình mà không cần viết câu lệnh SQL phức tạp",
      "Xóa sạch toàn bộ dữ liệu trong bảng",
      "Tự động dịch tên ca sĩ sang tiếng Anh",
      "Tải thêm nhạc chuông về máy tính"
    ],
    "answer": 0,
    "explain": "Ô Quick filter cho phép lọc dữ liệu tức thì theo từ khóa rất thuận tiện khi tìm kiếm."
  },
  {
    "id": "b21-12",
    "q": "Khi thực hiện câu lệnh 'SELECT COUNT(*) FROM casi;', kết quả trả về là gì?",
    "options": [
      "Tổng số lượng bản ghi (số lượng ca sĩ) hiện có trong bảng casi",
      "Tên của ca sĩ hát hay nhất",
      "Danh sách tất cả các bài hát",
      "Số lượng bảng có trong CSDL"
    ],
    "answer": 0,
    "explain": "COUNT(*) đếm tổng số dòng dữ liệu hiện có trong bảng."
  },
  {
    "id": "b21-13",
    "q": "Trong tab Query của HeidiSQL, sau khi chạy câu lệnh SELECT, bảng kết quả truy vấn sẽ được hiển thị ở đâu?",
    "options": [
      "Ở khung lưới kết quả bên dưới trình soạn thảo mã",
      "Tự động in ra máy in trên bàn giáo viên",
      "Được gửi qua tin nhắn SMS tới điện thoại",
      "Hiển thị ngoài màn hình khóa của máy tính"
    ],
    "answer": 0,
    "explain": "Kết quả truy vấn hiển thị ngay trong bảng lưới phía dưới tab Query, có thể cuộn xem và sao chép dễ dàng."
  },
  {
    "id": "b21-14",
    "q": "Để xóa một dòng bản ghi trong thẻ Data của HeidiSQL bằng chuột, ta thực hiện thế nào?",
    "options": [
      "Nhấp chuột chọn dòng cần xóa -> nhấn phím Delete (hoặc nhấp chuột phải chọn 'Delete selected row(s)')",
      "Nhấp chuột ba lần vào góc màn hình",
      "Bấm nút Save trên bàn phím",
      "Đóng màn hình laptop lại"
    ],
    "answer": 0,
    "explain": "Chọn dòng và nhấn Delete hoặc chuột phải -> Delete selected rows."
  },
  {
    "id": "b21-15",
    "q": "Điều gì sẽ xảy ra nếu chạy câu lệnh 'DELETE FROM casi;' mà quên mệnh đề WHERE?",
    "options": [
      "Toàn bộ tất cả ca sĩ trong bảng casi sẽ bị xóa sạch hoàn toàn",
      "Chỉ xóa duy nhất ca sĩ đầu tiên",
      "Hệ thống sẽ từ chối xóa",
      "Tên ca sĩ sẽ tự động đổi thành chữ hoa"
    ],
    "answer": 0,
    "explain": "Lệnh DELETE không có WHERE sẽ xóa sạch toàn bộ các hàng trong bảng!"
  },
  {
    "id": "b21-16",
    "q": "Để lấy ra danh sách 5 ca sĩ đầu tiên theo thứ tự idCasi tăng dần, ta sử dụng mệnh đề giới hạn nào trong MySQL?",
    "options": [
      "LIMIT 5",
      "TOP 5",
      "MAX 5",
      "FIRST 5"
    ],
    "answer": 0,
    "explain": "MySQL sử dụng mệnh đề LIMIT số_lượng ở cuối câu lệnh để giới hạn số hàng trả về."
  },
  {
    "id": "b21-17",
    "q": "Khi nhập liệu trong thẻ Data của HeidiSQL, nếu xuất hiện biểu tượng tam giác màu vàng hoặc đỏ ở đầu dòng, điều đó báo hiệu:",
    "options": [
      "Dòng dữ liệu đang được chỉnh sửa và chưa được ghi lưu (Apply) xuống máy chủ CSDL",
      "Máy tính đã bị nhiễm virus độc hại",
      "Dữ liệu đã được gửi lên vệ tinh",
      "Hệ điều hành Windows bị lỗi"
    ],
    "answer": 0,
    "explain": "Dấu tam giác biểu thị trạng thái bản ghi đang được sửa cục bộ (Pending changes); khi chuyển dòng khác thì dữ liệu mới thực sự được gửi lưu."
  },
  {
    "id": "b21-18",
    "q": "Để hủy bỏ các thao tác sửa đổi đang dở dang trên thẻ Data trước khi lưu, ta nhấn phím nào?",
    "options": [
      "Phím Esc",
      "Phím Enter",
      "Phím Space",
      "Phím F5"
    ],
    "answer": 0,
    "explain": "Phím Esc hủy bỏ thao tác gõ nhầm trên ô đang chỉnh sửa, khôi phục giá trị cũ."
  },
  {
    "id": "b21-19",
    "q": "Câu lệnh nào sau đây lọc các ca sĩ có mã `idCasi` nằm trong khoảng từ 2 đến 5?",
    "options": [
      "SELECT * FROM casi WHERE idCasi BETWEEN 2 AND 5;",
      "SELECT * FROM casi WHERE idCasi FROM 2 TO 5;",
      "SELECT * FROM casi WHERE idCasi IN (2, 5);",
      "SELECT * FROM casi WHERE idCasi >= 2 OR idCasi <= 5;"
    ],
    "answer": 0,
    "explain": "BETWEEN 2 AND 5 tương đương với idCasi >= 2 AND idCasi <= 5."
  },
  {
    "id": "b21-20",
    "q": "Để làm mới lại toàn bộ dữ liệu hiển thị trên thẻ Data sau khi có người khác cập nhật, ta nhấn nút nào?",
    "options": [
      "Phím F5 (hoặc nút Refresh hình mũi tên vòng tròn màu xanh)",
      "Phím F1",
      "Phím Esc",
      "Phím Backspace"
    ],
    "answer": 0,
    "explain": "Phím F5 tải lại dữ liệu mới nhất từ máy chủ MySQL về màn hình hiển thị."
  },
  {
    "id": "b21-21",
    "q": "Câu lệnh SQL nào dùng để chèn thêm một thể loại mới có tên là 'Nhạc truyền thống' vào bảng `theloai`?",
    "options": [
      "INSERT INTO theloai (tenTheloai) VALUES ('Nhạc truyền thống');",
      "ADD theloai = 'Nhạc truyền thống';",
      "UPDATE theloai ('Nhạc truyền thống');",
      "NEW theloai ('Nhạc truyền thống');"
    ],
    "answer": 0,
    "explain": "Cú pháp INSERT INTO tiêu chuẩn để thêm thể loại nhạc mới."
  },
  {
    "id": "b21-22",
    "q": "Nếu người dùng cố tình chèn giá trị trùng lặp vào một cột đã được thiết lập ràng buộc `UNIQUE` (hoặc PRIMARY KEY), hệ quản trị MySQL sẽ phản hồi thế nào?",
    "options": [
      "Báo lỗi 'Duplicate entry' và từ chối không cho chèn bản ghi đó",
      "Tự động ghi đè và xóa mất bản ghi cũ",
      "Tự động tắt nguồn máy chủ CSDL",
      "Chấp nhận chèn bình thường không báo gì"
    ],
    "answer": 0,
    "explain": "Ràng buộc duy nhất chặn đứng hành vi chèn trùng lặp, bảo vệ tính toàn vẹn của dữ liệu."
  },
  {
    "id": "b21-23",
    "q": "Trong thẻ Data của HeidiSQL, để tìm kiếm một từ trong toàn bộ các cột của bảng, ta nhấn tổ hợp phím tắt nào?",
    "options": [
      "Ctrl + F",
      "Ctrl + S",
      "Ctrl + P",
      "Ctrl + Z"
    ],
    "answer": 0,
    "explain": "Ctrl + F mở thanh tìm kiếm chuỗi văn bản trong lưới dữ liệu."
  },
  {
    "id": "b21-24",
    "q": "Kết quả cuối cùng của bài thực hành cập nhật dữ liệu bảng đơn giản là:",
    "options": [
      "Các bảng casi, nhacsi, theloai đã được nạp đầy đủ các bản ghi dữ liệu thực tế ban đầu, sẵn sàng cho việc nhập liệu các bài hát có liên kết tham chiếu",
      "Toàn bộ máy tính được dọn dẹp sạch sẽ",
      "Người dùng xóa bỏ phần mềm HeidiSQL",
      "Dữ liệu bị khóa lại vĩnh viễn"
    ],
    "answer": 0,
    "explain": "Dữ liệu ban đầu của các thực thể độc lập là tiền đề để tiến hành nhập bảng tham chiếu bannhac."
  }
];

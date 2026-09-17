import { Question } from "@/lib/types";

// Bài 19: Thực hành tạo lập CSDL và các bảng đơn giản
export const questions: Question[] = [
  {
    "id": "b19-01",
    "q": "Cổng mạng (Port) mặc định mà hệ quản trị cơ sở dữ liệu MySQL và MariaDB sử dụng để kết nối là:",
    "options": [
      "3306",
      "8080",
      "21",
      "443"
    ],
    "answer": 0,
    "explain": "Cổng mặc định của MySQL/MariaDB là 3306. Cổng 80/8080 dành cho Web HTTP, 21 cho FTP, 443 cho HTTPS."
  },
  {
    "id": "b19-02",
    "q": "Trong phần mềm HeidiSQL, để tạo một cơ sở dữ liệu mới, người dùng nhấp chuột phải vào tên máy chủ kết nối và chọn:",
    "options": [
      "Create new -> Database",
      "Insert record -> Table",
      "Tools -> Backup database",
      "File -> Open SQL file"
    ],
    "answer": 0,
    "explain": "Để tạo CSDL mới trong HeidiSQL, nhấp chuột phải vào kết nối máy chủ -> Chọn 'Create new' -> Chọn 'Database'."
  },
  {
    "id": "b19-03",
    "q": "Bảng mã ký tự (Collation/Encoding) chuẩn quốc tế được khuyến nghị chọn khi tạo CSDL tiếng Việt trong MySQL là:",
    "options": [
      "utf8mb4 hoặc utf8",
      "ASCII",
      "latin1_swedish_ci",
      "TCVN3"
    ],
    "answer": 0,
    "explain": "utf8mb4 (Unicode 4-byte) là chuẩn hỗ trợ đầy đủ tiếng Việt có dấu, biểu tượng cảm xúc và mọi ngôn ngữ thế giới."
  },
  {
    "id": "b19-04",
    "q": "Trong quá trình thiết kế bảng `casi`, trường `idCasi` nên được chọn kiểu dữ liệu nào và thiết lập thuộc tính gì để tự động tăng mã số khi thêm ca sĩ mới?",
    "options": [
      "Kiểu INT, thuộc tính AUTO_INCREMENT",
      "Kiểu VARCHAR(50), thuộc tính UNIQUE",
      "Kiểu DATE, thuộc tính NULL",
      "Kiểu FLOAT, thuộc tính UNSIGNED"
    ],
    "answer": 0,
    "explain": "Trường khóa chính dạng số nguyên tự tăng cần chọn kiểu INT kết hợp thuộc tính AUTO_INCREMENT trong MySQL."
  },
  {
    "id": "b19-05",
    "q": "Trường `tenCasi` dùng để lưu họ tên của ca sĩ (tiếng Việt có dấu, tối đa 100 ký tự) thì kiểu dữ liệu phù hợp nhất là:",
    "options": [
      "VARCHAR(100)",
      "INT",
      "BOOLEAN",
      "DATETIME"
    ],
    "answer": 0,
    "explain": "VARCHAR(n) là kiểu chuỗi ký tự độ dài thay đổi tối đa n ký tự, rất tối ưu cho tên người hoặc tên bài hát."
  },
  {
    "id": "b19-06",
    "q": "Khi tạo bảng trong HeidiSQL, để chỉ định một trường dữ liệu làm Khóa chính (Primary Key), thao tác chuẩn là gì?",
    "options": [
      "Nhấp chuột phải vào tên trường -> Chọn Create new index -> Chọn PRIMARY",
      "Gõ chữ 'PRIMARY' vào ô Description của trường",
      "Tô đậm tên trường bằng tổ hợp phím Ctrl + B",
      "Kéo thả trường đó lên đầu trang màn hình"
    ],
    "answer": 0,
    "explain": "Trong HeidiSQL, khóa chính được tạo bằng cách nhấp chuột phải vào cột đó -> 'Create new index' -> Chọn 'PRIMARY'."
  },
  {
    "id": "b19-07",
    "q": "Thuộc tính 'NOT NULL' khi khai báo một cột dữ liệu trong bảng có ý nghĩa gì?",
    "options": [
      "Bắt buộc trường đó phải có dữ liệu khi thêm mới, không được để trống rỗng",
      "Cho phép người dùng bỏ qua không cần nhập dữ liệu",
      "Quy định trường đó chỉ được chứa số âm",
      "Tự động xóa dòng nếu dữ liệu bị trùng lặp"
    ],
    "answer": 0,
    "explain": "NOT NULL là ràng buộc toàn vẹn bắt buộc cột dữ liệu phải có giá trị cụ thể, không được phép mang giá trị rỗng (NULL)."
  },
  {
    "id": "b19-08",
    "q": "Để lưu cấu trúc bảng mới vừa định nghĩa vào CSDL trong giao diện HeidiSQL, người dùng phải bấm nút nào?",
    "options": [
      "Nút Save (hoặc phím tắt Ctrl + S)",
      "Nút Refresh",
      "Nút Disconnect",
      "Nút Clear all"
    ],
    "answer": 0,
    "explain": "Sau khi định nghĩa danh sách các trường và chỉ mục, phải nhấn nút 'Save' (Ctrl + S) ở góc dưới để phần mềm gửi lệnh CREATE TABLE xuống máy chủ."
  },
  {
    "id": "b19-09",
    "q": "Trong mô hình CSDL `mymusic`, vì sao nên tạo các bảng `casi`, `nhacsi`, `theloai` trước bảng `bannhac`?",
    "options": [
      "Vì các bảng casi, nhacsi, theloai là các bảng độc lập (bảng danh mục) không chứa khóa ngoài tham chiếu tới bảng khác",
      "Vì bảng bannhac bắt buộc phải tạo vào ban đêm",
      "Vì HeidiSQL không cho phép tạo bảng có tên bắt đầu bằng chữ B",
      "Vì bảng bannhac có dung lượng nhỏ hơn các bảng còn lại"
    ],
    "answer": 0,
    "explain": "Quy tắc thiết kế: Các bảng độc lập (bảng mẹ/bảng cha) phải được tạo trước để sẵn sàng cung cấp khóa chính cho các bảng con tham chiếu."
  },
  {
    "id": "b19-10",
    "q": "Trong HeidiSQL, sau khi tạo bảng xong, người dùng chuyển sang thẻ nào để xem và nhập thử các bản ghi dữ liệu?",
    "options": [
      "Thẻ Data (Dữ liệu)",
      "Thẻ Basic (Cơ bản)",
      "Thẻ Options (Tùy chọn)",
      "Thẻ Indexes (Chỉ mục)"
    ],
    "answer": 0,
    "explain": "Thẻ Data hiển thị bảng tính dạng lưới (Data Grid) chứa các bản ghi, cho phép xem, thêm, sửa, xóa dữ liệu trực tiếp."
  },
  {
    "id": "b19-11",
    "q": "Phím tắt nào trên bàn phím dùng để thêm nhanh một dòng bản ghi mới trong thẻ Data của HeidiSQL?",
    "options": [
      "Phím Insert",
      "Phím Delete",
      "Phím Backspace",
      "Phím Esc"
    ],
    "answer": 0,
    "explain": "Phím Insert là phím tắt tiêu chuẩn trong HeidiSQL để tạo một dòng trống mới ở cuối bảng dữ liệu."
  },
  {
    "id": "b19-12",
    "q": "Khi xóa một bảng dữ liệu bằng câu lệnh SQL, câu lệnh nào sau đây là đúng chuẩn cú pháp?",
    "options": [
      "DROP TABLE ten_bang;",
      "DELETE TABLE ten_bang;",
      "REMOVE TABLE ten_bang;",
      "CLEAR TABLE ten_bang;"
    ],
    "answer": 0,
    "explain": "Cú pháp xóa bỏ vĩnh viễn cấu trúc và dữ liệu của bảng là: DROP TABLE ten_bang;"
  },
  {
    "id": "b19-13",
    "q": "Nếu muốn thêm một trường mới `ngaysinh` có kiểu DATE vào bảng `casi` đã tồn tại, ta dùng tab nào hoặc lệnh gì?",
    "options": [
      "Tab Table (thêm cột và bấm Save) hoặc dùng lệnh ALTER TABLE casi ADD ngaysinh DATE;",
      "Xóa CSDL rồi tạo lại từ đầu",
      "Dùng lệnh INSERT INTO casi ngaysinh;",
      "Dùng tab Query và gõ lệnh DROP DATABASE;"
    ],
    "answer": 0,
    "explain": "HeidiSQL hỗ trợ sửa trực tiếp trên tab cấu trúc bảng (thêm dòng rồi Save) hoặc thực thi lệnh ALTER TABLE trong SQL."
  },
  {
    "id": "b19-14",
    "q": "Khái niệm 'Hostname' (hoặc Server) khi kết nối HeidiSQL tới máy chủ nội bộ trên cùng một máy tính thường được điền là:",
    "options": [
      "127.0.0.1 hoặc localhost",
      "192.168.1.1",
      "8.8.8.8",
      "255.255.255.255"
    ],
    "answer": 0,
    "explain": "Địa chỉ loopback của máy cục bộ là localhost hoặc 127.0.0.1."
  },
  {
    "id": "b19-15",
    "q": "Tài khoản quản trị cao nhất mặc định trong hệ QTCSDL MySQL/MariaDB thường có tên người dùng (Username) là:",
    "options": [
      "root",
      "admin",
      "administrator",
      "user"
    ],
    "answer": 0,
    "explain": "Username mặc định của quản trị viên MySQL là 'root'."
  },
  {
    "id": "b19-16",
    "q": "Đặc điểm nổi bật của trường khóa chính tự tăng AUTO_INCREMENT khi thêm bản ghi mới là:",
    "options": [
      "Người dùng không cần nhập giá trị, hệ QTCSDL tự động cấp số thứ tự tăng dần duy nhất",
      "Bắt buộc người dùng phải gõ số thủ công",
      "Tự động đổi giá trị thành số âm",
      "Chỉ được áp dụng cho kiểu chuỗi văn bản VARCHAR"
    ],
    "answer": 0,
    "explain": "AUTO_INCREMENT giúp máy chủ CSDL tự sinh giá trị số nguyên kế tiếp không trùng lặp cho mỗi bản ghi mới."
  },
  {
    "id": "b19-17",
    "q": "Khi đặt tên bảng và tên các cột trong CSDL quan hệ, thói quen kỹ thuật nào sau đây là TỐT NHẤT?",
    "options": [
      "Dùng chữ cái không dấu, viết liền hoặc dùng dấu gạch dưới, không có khoảng trắng và ký tự đặc biệt",
      "Viết tiếng Việt có dấu đầy đủ và có nhiều khoảng cách",
      "Đặt tên thật dài kèm các ký tự @, #, $, %",
      "Đặt tên bảng trùng với các từ khóa chuẩn như SELECT, FROM, WHERE"
    ],
    "answer": 0,
    "explain": "Quy ước đặt tên CSDL: tiếng Việt không dấu, viết liền kiểu camelCase hoặc snake_case, tránh từ khóa SQL để ngăn ngừa lỗi cú pháp."
  },
  {
    "id": "b19-18",
    "q": "Thẻ nào trong HeidiSQL cho phép người dùng tự viết và chạy các câu lệnh SQL tự do?",
    "options": [
      "Thẻ Query",
      "Thẻ Host",
      "Thẻ Maintenance",
      "Thẻ Statistics"
    ],
    "answer": 0,
    "explain": "Thẻ Query cung cấp trình soạn thảo mã SQL có tô màu cú pháp và nút thực thi lệnh (F9)."
  },
  {
    "id": "b19-19",
    "q": "Phím tắt nào trong HeidiSQL dùng để chạy (thực thi) câu lệnh SQL đang soạn thảo trong thẻ Query?",
    "options": [
      "F9 (hoặc biểu tượng tam giác màu xanh)",
      "F1",
      "F5",
      "Ctrl + P"
    ],
    "answer": 0,
    "explain": "Nhấn F9 hoặc click vào biểu tượng 'Run' (nút tam giác xanh) để thực thi toàn bộ hoặc đoạn lệnh được chọn."
  },
  {
    "id": "b19-20",
    "q": "Để xóa một dòng bản ghi dữ liệu trong lưới Data của HeidiSQL, người dùng chọn dòng đó và nhấn tổ hợp phím nào?",
    "options": [
      "Phím Delete hoặc chuột phải chọn 'Delete selected row(s)'",
      "Phím Space",
      "Ctrl + C",
      "Alt + Tab"
    ],
    "answer": 0,
    "explain": "Phím Delete hoặc nhấp chuột phải chọn lệnh xóa dòng sẽ loại bỏ bản ghi được chọn khỏi bảng."
  },
  {
    "id": "b19-21",
    "q": "Khi lưu bảng trong HeidiSQL, nếu xuất hiện thông báo lỗi 'Incorrect table definition; there can be only one auto column and it must be defined as a key', nguyên nhân là do:",
    "options": [
      "Trường AUTO_INCREMENT chưa được thiết lập làm khóa (Key/Primary Key)",
      "Tên bảng quá ngắn",
      "Hệ điều hành Windows bị lỗi mạng",
      "Chưa cắm dây mạng LAN"
    ],
    "answer": 0,
    "explain": "Quy định trong MySQL: Thuộc tính AUTO_INCREMENT chỉ có thể áp dụng cho cột được khai báo là chỉ mục khóa (Index/Key/Primary Key)."
  },
  {
    "id": "b19-22",
    "q": "Trong mô hình CSDL `mymusic`, bảng `theloai` gồm 2 trường: `idTheloai` và `tenTheloai`. Bản ghi nào sau đây là hợp lệ khi nhập liệu?",
    "options": [
      "(1, 'Nhạc trữ tình')",
      "('ABC', 'Nhạc đỏ')",
      "(NULL, NULL)",
      "(1, NULL) nếu tenTheloai có ràng buộc NOT NULL"
    ],
    "answer": 0,
    "explain": "Bản ghi (1, 'Nhạc trữ tình') hoàn toàn chuẩn: mã số nguyên hợp lệ và tên thể loại đầy đủ."
  },
  {
    "id": "b19-23",
    "q": "Lệnh SQL nào sau đây dùng để tạo CSDL có tên `amnhac` với bảng mã UTF-8?",
    "options": [
      "CREATE DATABASE amnhac CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;",
      "MAKE DATABASE amnhac;",
      "NEW DATABASE amnhac;",
      "BUILD DATABASE amnhac CHARSET utf8;"
    ],
    "answer": 0,
    "explain": "Cú pháp chuẩn trong MySQL: CREATE DATABASE amnhac CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
  },
  {
    "id": "b19-24",
    "q": "Sau khi tạo mới một CSDL trong HeidiSQL, thao tác nào giúp cập nhật cây thư mục bên trái để thấy CSDL đó hiển thị?",
    "options": [
      "Nhấn phím F5 (Refresh) hoặc chuột phải chọn Refresh",
      "Khởi động lại máy tính",
      "Cài lại hệ điều hành",
      "Đóng màn hình máy tính rồi mở lại"
    ],
    "answer": 0,
    "explain": "Phím F5 giúp làm mới danh sách CSDL và bảng trên cây đối tượng của HeidiSQL."
  }
];

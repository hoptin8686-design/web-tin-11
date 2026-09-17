import { Question } from "@/lib/types";

// Bài 17: Quản trị CSDL trên máy tính
export const questions: Question[] = [
  {
    "id": "b17-01",
    "q": "MySQL và MariaDB là những ví dụ điển hình của loại phần mềm nào?",
    "options": [
      "Hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) mã nguồn mở rất phổ biến",
      "Phần mềm chỉnh sửa video đa phương tiện",
      "Trình duyệt web tốc độ cao",
      "Trò chơi điện tử nhập vai trực tuyến"
    ],
    "answer": 0,
    "explain": "MySQL và MariaDB là hai hệ quản trị CSDL quan hệ nguồn mở mạnh mẽ và được sử dụng rộng rãi nhất trên thế giới."
  },
  {
    "id": "b17-02",
    "q": "Mối quan hệ lịch sử giữa MariaDB và MySQL là gì?",
    "options": [
      "MariaDB là bản rẽ nhánh (Fork) mã nguồn mở hoàn toàn được phát triển bởi chính tác giả sáng lập MySQL nhằm đảm bảo tính tự do cho cộng đồng",
      "MariaDB là đối thủ thương mại độc quyền mua lại MySQL",
      "MariaDB là phần mềm nghe nhạc tạo ra bởi công ty MySQL",
      "Hai phần mềm hoàn toàn không có bất kỳ mối liên hệ nào"
    ],
    "answer": 0,
    "explain": "Michael Widenius (Monty) - người tạo ra MySQL - đã phát triển MariaDB sau khi Sun/Oracle mua lại MySQL nhằm giữ cho dự án luôn mở tự do."
  },
  {
    "id": "b17-03",
    "q": "Phần mềm HeidiSQL đóng vai trò là gì trong việc quản trị cơ sở dữ liệu?",
    "options": [
      "Phần mềm giao diện đồ họa trực quan (GUI Client) kết nối với máy chủ CSDL (như MySQL/MariaDB) để thao tác quản lý thuận tiện",
      "Trình điều khiển máy in laser màu",
      "Phần mềm diệt virus máy tính",
      "Bộ nguồn điện cấp cho máy tính"
    ],
    "answer": 0,
    "explain": "HeidiSQL là công cụ giao diện miễn phí, nhẹ và mạnh mẽ giúp người dùng thao tác CSDL qua chuột và biểu mẫu thay vì chỉ gõ dòng lệnh."
  },
  {
    "id": "b17-04",
    "q": "Cổng mạng (Port) mặc định mà hệ quản trị cơ sở dữ liệu MySQL/MariaDB sử dụng để lắng nghe kết nối là:",
    "options": [
      "3306",
      "80",
      "443",
      "21"
    ],
    "answer": 0,
    "explain": "Cổng 3306 là cổng tiêu chuẩn của dịch vụ MySQL/MariaDB (cổng 80 là HTTP, 443 là HTTPS, 21 là FTP)."
  },
  {
    "id": "b17-05",
    "q": "Tên máy chủ 'localhost' hoặc địa chỉ IP '127.0.0.1' khi cấu hình kết nối CSDL có ý nghĩa là:",
    "options": [
      "Chỉ chính chiếc máy tính cục bộ mà người dùng đang trực tiếp thao tác",
      "Một máy chủ đặt tại trụ sở của Google ở Mỹ",
      "Trang web tìm kiếm thông tin toàn cầu",
      "Địa chỉ mạng của đồn công an gần nhất"
    ],
    "answer": 0,
    "explain": "localhost / 127.0.0.1 là địa chỉ mạng lặp cục bộ (Loopback IP) trỏ tới chính máy tính hiện tại."
  },
  {
    "id": "b17-06",
    "q": "Tên tài khoản quản trị tối cao mặc định ban đầu trong hệ quản trị MySQL/MariaDB là:",
    "options": [
      "root",
      "admin",
      "administrator",
      "user"
    ],
    "answer": 0,
    "explain": "Tài khoản 'root' là tài khoản siêu quản trị mặc định có toàn quyền cao nhất trên máy chủ MySQL."
  },
  {
    "id": "b17-07",
    "q": "Khi cài đặt gói phần mềm trọn gói như XAMPP hoặc WampServer, người dùng được cung cấp sẵn những gì?",
    "options": [
      "Gói tích hợp sẵn máy chủ web Apache, hệ QTCSDL MySQL/MariaDB, ngôn ngữ PHP và công cụ phpMyAdmin",
      "Một chiếc máy tính xách tay mới",
      "Bản quyền hệ điều hành Windows vĩnh viễn",
      "Dịch vụ Internet cáp quang miễn phí"
    ],
    "answer": 0,
    "explain": "XAMPP là môi trường phát triển web trọn gói cực kỳ thuận tiện cho học sinh, sinh viên thực hành CSDL và lập trình web."
  },
  {
    "id": "b17-08",
    "q": "Giao diện web trực quan rất phổ biến chạy trên trình duyệt để quản lý MySQL đi kèm trong XAMPP có tên là:",
    "options": [
      "phpMyAdmin",
      "Photoshop",
      "PowerPoint",
      "Paint"
    ],
    "answer": 0,
    "explain": "phpMyAdmin là ứng dụng web mã nguồn mở viết bằng PHP dùng để quản trị MySQL trực tiếp qua trình duyệt web."
  },
  {
    "id": "b17-09",
    "q": "Để HeidiSQL có thể kết nối thành công tới cơ sở dữ liệu MySQL, điều kiện tiên quyết là:",
    "options": [
      "Dịch vụ máy chủ MySQL/MariaDB phải đang ở trạng thái chạy (Running / Started)",
      "Máy tính phải được ngắt kết nối nguồn điện",
      "Người dùng phải rút chuột máy tính ra",
      "Phải tắt tất cả các đèn điện trong phòng"
    ],
    "answer": 0,
    "explain": "Dịch vụ MySQL phải được bật trước (ví dụ nhấn Start MySQL trong XAMPP Control Panel) thì các phần mềm Client mới kết nối được."
  },
  {
    "id": "b17-10",
    "q": "Trong cửa sổ thiết lập kết nối (Session Manager) của HeidiSQL, 4 thông số cơ bản bắt buộc phải điền đúng gồm:",
    "options": [
      "Hostname / IP, Cổng (Port), Tên đăng nhập (User) và Mật khẩu (Password)",
      "Họ tên, Ngày sinh, Quê quán và Giới tính",
      "Chiều cao, Cân nặng, Nhóm máu và Sở thích",
      "Nhãn hiệu bàn phím, Chuột, Màn hình và Tai nghe"
    ],
    "answer": 0,
    "explain": "Bốn thông số mạng: Máy chủ ở đâu? Cổng nào? Đăng nhập bằng tài khoản gì? Mật khẩu là gì?"
  },
  {
    "id": "b17-11",
    "q": "Lỗi kết nối 'Can't connect to MySQL server on 'localhost' (10061)' thường xuất phát từ nguyên nhân nào?",
    "options": [
      "Dịch vụ máy chủ MySQL chưa được bật chạy hoặc đang bị chặn bởi tường lửa",
      "Bàn phím máy tính bị gõ sai phông chữ tiếng Việt",
      "Màn hình máy tính có độ sáng quá thấp",
      "Người dùng chưa ăn sáng"
    ],
    "answer": 0,
    "explain": "Lỗi 10061 báo hiệu máy khách đã gửi yêu cầu tới cổng 3306 nhưng không có chương trình máy chủ nào đang lắng nghe tại cổng đó."
  },
  {
    "id": "b17-12",
    "q": "Ưu điểm nổi bật của việc sử dụng công cụ đồ họa trực quan (như HeidiSQL) so với giao diện dòng lệnh văn bản (MySQL Command Line Client) là:",
    "options": [
      "Thao tác xem, sửa, tạo bảng bằng chuột rất trực quan, dễ nhập liệu dạng lưới và hiển thị cấu trúc rõ ràng",
      "Làm cho máy tính không bao giờ bị nóng",
      "Tự động tăng dung lượng thanh RAM máy tính",
      "Giúp máy tính chạy được khi mất điện"
    ],
    "answer": 0,
    "explain": "GUI Client giúp người học dễ tiếp cận, thao tác kéo thả, xem dữ liệu trực quan trên bảng biểu mà không phải nhớ mọi câu lệnh phức tạp."
  },
  {
    "id": "b17-13",
    "q": "Trong HeidiSQL, để thực thi một đoạn mã lệnh SQL vừa viết trong tab 'Query', em nhấn phím tắt nào?",
    "options": [
      "F9 (hoặc nút Run hình tam giác màu xanh)",
      "F1",
      "F4",
      "Esc"
    ],
    "answer": 0,
    "explain": "Phím F9 trong HeidiSQL là phím tắt tiêu chuẩn để chạy (Execute) các câu truy vấn trong tab Query."
  },
  {
    "id": "b17-14",
    "q": "Thẻ 'Data' trong HeidiSQL cho phép người dùng làm gì đối với bảng đang chọn?",
    "options": [
      "Xem toàn bộ dữ liệu của bảng dưới dạng bảng tính và trực tiếp thêm, sửa, xóa các ô dữ liệu một cách trực quan",
      "Xóa bỏ hoàn toàn phần mềm HeidiSQL khỏi máy tính",
      "Tắt nguồn máy chủ MySQL",
      "Đổi tên hệ điều hành Windows"
    ],
    "answer": 0,
    "explain": "Thẻ Data cung cấp giao diện lưới trực quan hiển thị dữ liệu của bảng, cho phép chỉnh sửa trực tiếp giống như trong Excel."
  },
  {
    "id": "b17-15",
    "q": "Thẻ 'Table' trong HeidiSQL dùng để:",
    "options": [
      "Xem và chỉnh sửa cấu trúc thiết kế của bảng (tên cột, kiểu dữ liệu, khóa chính, độ dài, chỉ mục...)",
      "Nghe nhạc và xem phim trực tuyến",
      "Gửi thư điện tử cho bạn bè",
      "Kiểm tra nhiệt độ CPU"
    ],
    "answer": 0,
    "explain": "Thẻ Table là nơi cấu hình cấu trúc bảng logic, thêm cột mới, chọn khóa chính và thiết lập thuộc tính Auto-increment."
  },
  {
    "id": "b17-16",
    "q": "Khi tạo một cơ sở dữ liệu mới trong MySQL/HeidiSQL, bảng mã ký tự (Collation) được khuyên dùng để hỗ trợ lưu trữ tiếng Việt đầy đủ và chuẩn xác nhất là:",
    "options": [
      "utf8mb4_general_ci hoặc utf8mb4_unicode_ci",
      "latin1_swedish_ci",
      "ascii_general_ci",
      "cp1252"
    ],
    "answer": 0,
    "explain": "Chuẩn mã hóa utf8mb4 hỗ trợ lưu trữ trọn vẹn toàn bộ ký tự tiếng Việt có dấu và các biểu tượng cảm xúc Emoji hiện đại."
  },
  {
    "id": "b17-17",
    "q": "Để tạo một cơ sở dữ liệu mới trong HeidiSQL, ta nhấp chuột phải vào tên phiên kết nối ở khung cây bên trái và chọn:",
    "options": [
      "Create new -> Database",
      "Delete session",
      "Disconnect",
      "Exit"
    ],
    "answer": 0,
    "explain": "Menu ngữ cảnh chuột phải -> Create new -> Database cho phép tạo một CSDL mới rất nhanh chóng."
  },
  {
    "id": "b17-18",
    "q": "Tab 'SQL log' ở góc dưới của màn hình HeidiSQL hiển thị điều gì?",
    "options": [
      "Các câu lệnh SQL thực tế mà HeidiSQL đã tự động sinh ra và gửi tới máy chủ MySQL sau mỗi thao tác bấm chuột của người dùng",
      "Danh sách bài hát được phát trên máy tính",
      "Lịch sử các trang web người dùng đã xem trong tuần",
      "Báo cáo nhiệt độ thời tiết địa phương"
    ],
    "answer": 0,
    "explain": "Tab SQL log rất bổ ích cho việc học: mỗi khi ta tạo bảng hay sửa dữ liệu bằng chuột, HeidiSQL hiển thị ngay câu lệnh SQL chuẩn tương ứng bên dưới."
  },
  {
    "id": "b17-19",
    "q": "Khi xuất khẩu (Export) CSDL ra tệp tin sao lưu trong HeidiSQL, định dạng tệp thông dụng nhất được tạo ra là:",
    "options": [
      "Tệp tin văn bản chứa các câu lệnh SQL có phần mở rộng là .sql",
      "Tệp video .mp4",
      "Tệp âm thanh .mp3",
      "Tệp ảnh .png"
    ],
    "answer": 0,
    "explain": "Tệp .sql chứa toàn bộ các câu lệnh DDL (CREATE TABLE) và DML (INSERT INTO) để tái tạo lại CSDL trên bất kỳ máy chủ nào."
  },
  {
    "id": "b17-20",
    "q": "Để ngắt kết nối an toàn với máy chủ CSDL trong HeidiSQL sau khi hoàn thành buổi thực hành, người dùng chọn:",
    "options": [
      "Disconnect (hoặc đóng phần mềm HeidiSQL)",
      "Rút phích cắm nguồn máy tính ngay lập tức",
      "Xóa sạch toàn bộ thư mục cài đặt phần mềm",
      "Tắt công tắc cầu dao điện phòng thực hành"
    ],
    "answer": 0,
    "explain": "Disconnect đóng các phiên làm việc và giải phóng an toàn các kết nối mạng tới máy chủ CSDL."
  },
  {
    "id": "b17-21",
    "q": "Phần mềm HeidiSQL có thể kết nối tới các hệ quản trị CSDL nào sau đây?",
    "options": [
      "MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, SQLite",
      "Chỉ kết nối được với phần mềm vẽ tranh Paint",
      "Chỉ kết nối được với trò chơi cờ vua",
      "Chỉ kết nối được với máy bay không người lái"
    ],
    "answer": 0,
    "explain": "HeidiSQL là công cụ đa năng, hỗ trợ nhiều hệ quản trị CSDL quan hệ hàng đầu thế giới."
  },
  {
    "id": "b17-22",
    "q": "Để kiểm tra xem dịch vụ MySQL trong gói XAMPP đã hoạt động hay chưa, người dùng quan sát điều gì trên bảng điều khiển XAMPP Control Panel?",
    "options": [
      "Chữ 'MySQL' chuyển sang nền màu xanh lá cây và hiển thị số cổng mạng (Port 3306)",
      "Chữ 'MySQL' chuyển sang màu đỏ và phát ra tiếng chuông",
      "Máy tính tự động khởi động lại",
      "Màn hình chuyển sang màu đen"
    ],
    "answer": 0,
    "explain": "Màu xanh lá cây kèm số Port trong XAMPP Control Panel xác nhận dịch vụ đã khởi động thành công và sẵn sàng nhận kết nối."
  },
  {
    "id": "b17-23",
    "q": "Hành động nào sau đây là KHUYẾN NGHỊ BẮT BUỘC khi triển khai hệ quản trị MySQL vào môi trường thực tế?",
    "options": [
      "Đặt mật khẩu phức tạp và an toàn cho tài khoản 'root' thay vì để mật khẩu trống",
      "Để mật khẩu trống cho ai vào sửa cũng được",
      "Tắt hoàn toàn tính năng bảo mật của máy chủ",
      "Ghi tài khoản và mật khẩu lên bảng tin công cộng"
    ],
    "answer": 0,
    "explain": "Tài khoản root mặc định khi mới cài XAMPP thường để trống mật khẩu; khi đưa vào sử dụng bắt buộc phải đặt mật khẩu mạnh."
  },
  {
    "id": "b17-24",
    "q": "Tại sao hệ quản trị CSDL MySQL lại là lựa chọn hàng đầu cho các trang web và ứng dụng trên Internet?",
    "options": [
      "Miễn phí mã nguồn mở, tốc độ cao, ổn định, đáng tin cậy, dễ cài đặt và được hỗ trợ bởi một cộng đồng toàn cầu khổng lồ",
      "Vì MySQL được cài sẵn trong chip vi xử lý của điện thoại",
      "Vì các hệ quản trị khác đều bị cấm sử dụng",
      "Vì MySQL tự động viết xong toàn bộ mã nguồn trang web"
    ],
    "answer": 0,
    "explain": "MySQL là thành phần chữ 'M' trong ngăn xếp công nghệ huyền thoại LAMP (Linux - Apache - MySQL - PHP) thống trị Internet hơn 25 năm qua."
  }
];

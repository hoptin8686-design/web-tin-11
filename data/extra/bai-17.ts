import { LessonExtra } from "@/lib/types";

// Bài 17: Quản trị CSDL trên máy tính (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b17-tf1",
      "context": "Trong buổi thực hành cài đặt và kết nối hệ quản trị cơ sở dữ liệu tại phòng máy trường THPT Phục Hòa, nhóm học sinh thực hiện các bước cấu hình HeidiSQL:",
      "statements": [
        {
          "text": "a) HeidiSQL là phần mềm giao diện đồ họa trực quan (GUI Client) giúp kết nối và quản lý máy chủ CSDL MySQL một cách dễ dàng.",
          "answer": true,
          "explain": "Đúng. HeidiSQL cung cấp giao diện trực quan thay thế dòng lệnh."
        },
        {
          "text": "b) Địa chỉ IP '127.0.0.1' hoặc 'localhost' dùng để trỏ kết nối tới chính chiếc máy tính cục bộ đang thực hành.",
          "answer": true,
          "explain": "Đúng. Đây là địa chỉ loopback chuẩn của máy tính cá nhân."
        },
        {
          "text": "c) Cổng mạng (Port) mặc định của hệ quản trị cơ sở dữ liệu MySQL là 3306.",
          "answer": true,
          "explain": "Đúng. 3306 là cổng kết nối tiêu chuẩn của MySQL/MariaDB."
        },
        {
          "text": "d) Người dùng bắt buộc phải ngắt kết nối mạng máy tính và tắt dịch vụ MySQL thì HeidiSQL mới có thể kết nối được.",
          "answer": false,
          "explain": "Sai. Dịch vụ MySQL bắt buộc phải ĐANG CHẠY (Running) thì HeidiSQL mới có thể kết nối thành công."
        }
      ]
    },
    {
      "id": "b17-tf2",
      "context": "Về các thao tác quản trị cơ sở dữ liệu trên phần mềm HeidiSQL:",
      "statements": [
        {
          "text": "a) Thẻ 'Data' trong HeidiSQL cho phép người dùng xem và trực tiếp sửa đổi các giá trị trong bảng giống như thao tác trên bảng tính Excel.",
          "answer": true,
          "explain": "Đúng. Lưới dữ liệu tab Data cho phép thêm, sửa, xóa trực quan."
        },
        {
          "text": "b) Thẻ 'Table' là nơi người dùng có thể định nghĩa cấu trúc bảng: thêm cột mới, chọn kiểu dữ liệu (INT, VARCHAR) và thiết lập khóa chính.",
          "answer": true,
          "explain": "Đúng. Thẻ Table dành riêng cho thiết kế lược đồ cấu trúc bảng."
        },
        {
          "text": "c) Tab 'Query' trong HeidiSQL chỉ cho phép gõ tối đa duy nhất một ký tự và không chạy được câu lệnh SQL.",
          "answer": false,
          "explain": "Sai. Tab Query là trình soạn thảo mã SQL đầy đủ, cho phép viết và chạy các tập lệnh phức tạp bằng phím F9."
        },
        {
          "text": "d) Khung 'SQL log' ở phía dưới tự động hiển thị câu lệnh SQL chuẩn tương ứng với mỗi hành động bấm chuột của người dùng.",
          "answer": true,
          "explain": "Đúng. Khung log giúp người dùng học và đối chiếu cú pháp SQL rất trực quan."
        }
      ]
    },
    {
      "id": "b17-tf3",
      "context": "Về bảng mã ký tự và hệ quản trị CSDL MySQL/MariaDB:",
      "statements": [
        {
          "text": "a) Khi tạo CSDL mới, nên chọn bảng mã Collation là 'utf8mb4' để hỗ trợ lưu trữ tiếng Việt có dấu đầy đủ và chính xác.",
          "answer": true,
          "explain": "Đúng. utf8mb4 là chuẩn quốc tế mã hóa tiếng Việt và đa ngôn ngữ tối ưu."
        },
        {
          "text": "b) MariaDB là bản phân phối mã nguồn mở hoàn toàn được rẽ nhánh từ MySQL bởi chính tác giả sáng lập ra MySQL.",
          "answer": true,
          "explain": "Đúng. MariaDB tương thích hoàn toàn với MySQL và phát triển tự do bởi cộng đồng."
        },
        {
          "text": "c) Tài khoản quản trị 'root' trong MySQL không có bất kỳ quyền hạn nào và không thể tạo thêm bảng mới.",
          "answer": false,
          "explain": "Sai. Tài khoản 'root' là tài khoản siêu quản trị tối cao (Superuser) có toàn quyền trên toàn bộ máy chủ."
        },
        {
          "text": "d) Gói phần mềm XAMPP tích hợp sẵn cả máy chủ web Apache, hệ QTCSDL MySQL/MariaDB và công cụ phpMyAdmin.",
          "answer": true,
          "explain": "Đúng. XAMPP là bộ công cụ thực hành tích hợp phổ biến nhất cho học sinh, sinh viên."
        }
      ]
    },
    {
      "id": "b17-tf4",
      "context": "Về an toàn và bảo mật khi quản trị CSDL trên máy tính:",
      "statements": [
        {
          "text": "a) Đặt mật khẩu mạnh cho tài khoản quản trị 'root' là nguyên tắc an ninh bắt buộc khi triển khai CSDL vào thực tế.",
          "answer": true,
          "explain": "Đúng. Để trống mật khẩu root là mối đe dọa an ninh nghiêm trọng."
        },
        {
          "text": "b) HeidiSQL hỗ trợ xuất khẩu (Export) toàn bộ CSDL thành một tệp tin chứa mã lệnh SQL (.sql) để phục vụ sao lưu dự phòng.",
          "answer": true,
          "explain": "Đúng. Xuất SQL dump là phương thức sao lưu kinh điển và chuẩn hóa."
        },
        {
          "text": "c) Nếu gỡ bỏ phần mềm HeidiSQL khỏi máy tính thì toàn bộ dữ liệu CSDL lưu trong máy chủ MySQL cũng tự động bị xóa sạch theo.",
          "answer": false,
          "explain": "Sai. HeidiSQL chỉ là phần mềm máy khách (Client); dữ liệu thực sự nằm trong dịch vụ máy chủ MySQL, gỡ Client không làm mất CSDL."
        },
        {
          "text": "d) Người dùng có thể phân quyền tạo các tài khoản phụ với quyền hạn hạn chế thay vì dùng chung tài khoản root cho mọi ứng dụng.",
          "answer": true,
          "explain": "Đúng. Nguyên tắc đặc quyền tối thiểu giúp bảo vệ hệ thống an toàn."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b17-es1",
      "q": "Trình bày vai trò của phần mềm HeidiSQL trong việc quản trị cơ sở dữ liệu MySQL. Nêu 4 ưu điểm nổi bật của việc sử dụng công cụ đồ họa HeidiSQL so với giao diện dòng lệnh văn bản.",
      "answer": "1. Vai trò của HeidiSQL: HeidiSQL là một phần mềm ứng dụng máy khách có giao diện đồ họa (GUI Client) mã nguồn mở, gọn nhẹ và miễn phí. Nó đóng vai trò cầu nối trực quan giúp người dùng dễ dàng kết nối tới máy chủ CSDL (như MySQL, MariaDB, PostgreSQL), thực hiện các tác vụ tạo lập, thiết kế bảng, nhập liệu, truy vấn và sao lưu CSDL một cách nhanh chóng mà không cần phải gõ các câu lệnh dòng lệnh thô sơ.\n\n2. Bốn ưu điểm nổi bật so với giao diện dòng lệnh (CLI):\n- Thiết kế bảng trực quan và dễ dàng: Cho phép tạo bảng, đặt tên cột, chọn kiểu dữ liệu (INT, VARCHAR, DATE), tích chọn khóa chính, tự động tăng (Auto-increment) chỉ bằng thao tác chuột trên biểu mẫu có sẵn.\n- Thao tác dữ liệu dạng lưới giống Excel: Người dùng có thể duyệt, xem hàng ngàn dòng dữ liệu trực quan trên tab Data, lọc dữ liệu nhanh, nhấp đúp chuột vào ô để sửa giá trị trực tiếp và sao chép dễ dàng.\n- Trình soạn thảo truy vấn SQL thông minh: Tab Query hỗ trợ tô màu cú pháp (Syntax highlighting), tự động gợi ý tên bảng và tên cột (Auto-complete), chạy câu lệnh bằng phím F9 và hiển thị kết quả phân tách rõ ràng bên dưới.\n- Hỗ trợ học tập qua khung nhật ký SQL Log: Mỗi thao tác bấm chuột trên giao diện (như tạo bảng, thêm dòng, sửa điểm) đều được HeidiSQL tự động dịch thành câu lệnh SQL chuẩn hiển thị ngay ở khung bên dưới, giúp người học nhanh chóng hiểu và nắm vững cú pháp SQL thực tế."
    },
    {
      "id": "b17-es2",
      "q": "Nêu ý nghĩa của 4 thông số bắt buộc khi thiết lập một kết nối mới trong Session Manager của HeidiSQL để kết nối tới CSDL MySQL chạy trên máy tính cục bộ.",
      "answer": "Bốn thông số kết nối cơ bản:\n1. Network type (Loại mạng / Hệ QTCSDL): Chọn hệ quản trị CSDL muốn kết nối (chọn 'MariaDB or MySQL (TCP/IP)') để HeidiSQL sử dụng đúng giao thức truyền tin chuẩn của MySQL.\n2. Hostname / IP (Tên máy chủ hoặc địa chỉ IP): Địa chỉ mạng của chiếc máy tính đang chạy dịch vụ MySQL. Khi thực hành trên chính máy tính của mình, ta điền 'localhost' hoặc địa chỉ IP lặp '127.0.0.1'.\n3. User (Tên tài khoản người dùng): Tên đăng nhập vào máy chủ CSDL. Khi mới cài đặt, tài khoản quản trị tối cao mặc định là 'root'.\n4. Password (Mật khẩu): Mật khẩu tương ứng với tài khoản trên. Nếu dùng bộ cài XAMPP mặc định chưa đặt mật khẩu thì để trống ô này; nếu đã thiết lập mật khẩu thì phải nhập chính xác.\n5. Port (Cổng kết nối mạng): Cổng dịch vụ lắng nghe của MySQL, mặc định là '3306'."
    },
    {
      "id": "b17-es3",
      "q": "Trong quá trình thực hành kết nối HeidiSQL với MySQL trên máy tính, nếu gặp thông báo lỗi: 'Can't connect to MySQL server on '127.0.0.1' (10061)', em sẽ suy đoán những nguyên nhân nào và hướng dẫn cách khắc phục như thế nào?",
      "answer": "1. Nguyên nhân gây ra lỗi 10061:\n- Dịch vụ máy chủ MySQL chưa được bật khởi động (thường do quên chưa mở XAMPP hoặc chưa bấm nút Start MySQL).\n- Cổng mạng 3306 của MySQL đang bị xung đột hoặc bị chiếm dụng bởi một phần mềm khác (như một bản MySQL khác đã cài trước đó).\n- Tường lửa (Windows Firewall) hoặc phần mềm diệt virus đang chặn kết nối mạng cục bộ tới cổng 3306.\n\n2. Các bước khắc phục:\n- Bước 1: Mở bảng điều khiển 'XAMPP Control Panel', quan sát mục MySQL xem đã bấm nút 'Start' chưa. Nhấp vào 'Start' và chờ chữ MySQL chuyển sang màu xanh lá cây kèm thông báo 'Port 3306'.\n- Bước 2: Nếu MySQL không chịu chạy do xung đột cổng: Nhấp vào nút 'Config' của MySQL trong XAMPP, mở tệp 'my.ini', tìm cổng 3306 và đổi thành 3307, sau đó Start lại và sửa cổng trong HeidiSQL thành 3307.\n- Bước 3: Kiểm tra lại thông số Hostname trong HeidiSQL (đảm bảo gõ đúng '127.0.0.1' hoặc 'localhost') rồi nhấn nút 'Open' để kết nối lại."
    },
    {
      "id": "b17-es4",
      "q": "Tại sao khi tạo mới một cơ sở dữ liệu trên máy tính để phục vụ các bài toán thực tế của Việt Nam, người quản trị CSDL luôn được khuyến nghị chọn bảng mã 'utf8mb4' thay vì bảng mã mặc định 'latin1'?",
      "answer": "Lý do bắt buộc chọn bảng mã 'utf8mb4':\n1. Bản chất của bảng mã latin1 (Latin-1 / ISO-8859-1): Là bảng mã 8-bit chỉ hỗ trợ bảng chữ cái tiếng Anh và một số ngôn ngữ Tây Âu, hoàn toàn KHÔNG CÓ các ký tự tiếng Việt có dấu (như ă, â, đ, ê, ô, ơ, ư và các dấu thanh sắc, huyền, hỏi, ngã, nặng). Nếu lưu tiếng Việt bằng bảng mã latin1, văn bản sẽ bị lỗi phông hoàn toàn biến thành các ký tự rác khó hiểu (như: Nguy?n V?n An, bi?n d?i d? li?u).\n2. Ưu thế vượt trội của bảng mã utf8mb4: Là chuẩn mã hóa Unicode đầy đủ nhất (sử dụng tối đa 4 byte cho mỗi ký tự), hỗ trợ hoàn hảo 100% tất cả các nguyên âm, phụ âm tiếng Việt có dấu ở mọi bảng mã gõ (Unicode dựng sẵn, tổ hợp) và hỗ trợ hàng triệu ký tự của tất cả các ngôn ngữ trên thế giới cùng các biểu tượng cảm xúc Emoji hiện đại.\n3. Tính đồng bộ và chuyển đổi số: Chọn utf8mb4 ngay từ đầu đảm bảo dữ liệu hiển thị chính xác trên mọi nền tảng (giao diện web, ứng dụng điện thoại, báo cáo PDF) mà không bao giờ bị lỗi hiển thị phông chữ."
    }
  ]
};

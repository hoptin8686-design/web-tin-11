import { LessonExtra } from "@/lib/types";

// Bài 19: Thực hành tạo lập CSDL và các bảng đơn giản (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b19-tf1",
      "context": "Trong buổi thực hành Tin học 11, bạn An sử dụng HeidiSQL kết nối tới máy chủ MySQL cục bộ và bắt đầu tạo CSDL quản lý âm nhạc mang tên `mymusic`.",
      "statements": [
        {
          "text": "a) An cần điền Hostname là `localhost` (hoặc `127.0.0.1`), Port là 3306 và User là `root` để kết nối vào máy chủ MySQL trên máy tính của mình.",
          "answer": true,
          "explain": "Đúng. Đây là các thông số kết nối mặc định chuẩn của máy chủ MySQL cục bộ."
        },
        {
          "text": "b) Khi tạo CSDL `mymusic`, An nên chọn bảng mã Collation là `utf8mb4_unicode_ci` để hệ thống lưu trữ chuẩn xác tiếng Việt có dấu.",
          "answer": true,
          "explain": "Đúng. utf8mb4_unicode_ci là bảng mã quốc tế tốt nhất cho tiếng Việt và biểu tượng đa ngôn ngữ."
        },
        {
          "text": "c) An bắt buộc phải tạo CSDL bằng dòng lệnh trong Command Prompt chứ HeidiSQL không có giao diện đồ họa để tạo.",
          "answer": false,
          "explain": "Sai. HeidiSQL là phần mềm trực quan, chỉ cần nhấp chuột phải chọn 'Create new -> Database' là xong."
        },
        {
          "text": "d) Sau khi tạo CSDL `mymusic` thành công, CSDL này sẽ tự động chứa sẵn toàn bộ các bảng dữ liệu về bài hát mà An không cần tạo bảng.",
          "answer": false,
          "explain": "Sai. CSDL mới tạo là một không gian lưu trữ rỗng, người dùng phải tự thiết kế và tạo các bảng theo yêu cầu."
        }
      ]
    },
    {
      "id": "b19-tf2",
      "context": "An tiến hành tạo bảng `casi` gồm 2 trường: `idCasi` (kiểu INT, AUTO_INCREMENT, PRIMARY KEY) và `tenCasi` (kiểu VARCHAR(100), NOT NULL).",
      "statements": [
        {
          "text": "a) Thuộc tính AUTO_INCREMENT trên trường `idCasi` giúp tự động sinh mã số tăng dần mỗi khi An chèn thêm một ca sĩ mới.",
          "answer": true,
          "explain": "Đúng. Tính năng tự tăng giúp đơn giản hóa việc tạo khóa chính không trùng lặp."
        },
        {
          "text": "b) Ràng buộc PRIMARY KEY đảm bảo trường `idCasi` không bao giờ bị trùng lặp và không nhận giá trị NULL.",
          "answer": true,
          "explain": "Đúng. Đây là hai đặc tính bất biến bắt buộc của khóa chính trong CSDL quan hệ."
        },
        {
          "text": "c) Ràng buộc NOT NULL trên trường `tenCasi` cho phép An để trống tên ca sĩ khi lưu bản ghi vào CSDL.",
          "answer": false,
          "explain": "Sai. NOT NULL ngăn cấm việc để rỗng giá trị; người dùng bắt buộc phải nhập tên ca sĩ."
        },
        {
          "text": "d) Trong HeidiSQL, sau khi khai báo các cột, An phải nhấn nút Save (Ctrl + S) để bảng chính thức được tạo trên máy chủ.",
          "answer": true,
          "explain": "Đúng. Lệnh CREATE TABLE chỉ được thực thi gửi đến máy chủ khi người dùng nhấn Save."
        }
      ]
    },
    {
      "id": "b19-tf3",
      "context": "Xét quy trình tạo các bảng trong CSDL `mymusic` gồm: `casi`, `nhacsi`, `theloai` và `bannhac` (bảng `bannhac` có các trường `idCasi`, `idNhacsi`, `idTheloai`).",
      "statements": [
        {
          "text": "a) Các bảng `casi`, `nhacsi`, `theloai` được gọi là các bảng đơn giản (bảng danh mục) vì chúng không chứa khóa ngoài tham chiếu tới bảng khác.",
          "answer": true,
          "explain": "Đúng. Chúng là các thực thể độc lập cung cấp danh mục đối tượng cho bảng bản nhạc."
        },
        {
          "text": "b) Ta nên tạo bảng `bannhac` trước, sau đó mới tạo các bảng `casi` và `nhacsi` để tiết kiệm bộ nhớ RAM.",
          "answer": false,
          "explain": "Sai. Bảng mẹ chứa khóa chính phải được tạo trước để bảng con có đối tượng thiết lập quan hệ khóa ngoài sau đó."
        },
        {
          "text": "c) Có thể dùng câu lệnh SQL CREATE TABLE trong thẻ Query của HeidiSQL để tạo cùng lúc nhiều bảng nếu nắm vững cú pháp.",
          "answer": true,
          "explain": "Đúng. Trình soạn thảo Query cho phép chạy các đoạn kịch bản SQL dài tạo nhiều bảng tuần tự."
        },
        {
          "text": "d) Tên bảng và tên trường nên đặt có dấu tiếng Việt kèm khoảng trắng (ví dụ: 'Ca Sĩ Việt Nam') để chương trình chạy mượt hơn.",
          "answer": false,
          "explain": "Sai. Đặt tên có dấu và khoảng trắng rất dễ gây lỗi cú pháp và không chuẩn hóa trong lập trình CSDL."
        }
      ]
    },
    {
      "id": "b19-tf4",
      "context": "Sau khi tạo xong bảng `casi`, An chuyển sang thẻ Data để nhập thử dữ liệu và kiểm tra hoạt động của bảng.",
      "statements": [
        {
          "text": "a) Khi chèn dòng mới, An có thể để trống cột `idCasi`, hệ thống sẽ tự động gán giá trị 1 cho dòng đầu tiên và 2 cho dòng kế tiếp.",
          "answer": true,
          "explain": "Đúng. Đó là cơ chế vận hành tự động của trường số nguyên AUTO_INCREMENT."
        },
        {
          "text": "b) An có thể bấm phím Insert để thêm nhanh dòng mới và bấm phím Delete để xóa dòng đang chọn.",
          "answer": true,
          "explain": "Đúng. Đây là các phím tắt thao tác nhanh trên lưới dữ liệu của HeidiSQL."
        },
        {
          "text": "c) Mọi thay đổi về dữ liệu trên thẻ Data của HeidiSQL chỉ được lưu tạm trong bộ nhớ của màn hình và sẽ mất khi tắt máy tính.",
          "answer": false,
          "explain": "Sai. Khi lưu (Post changes), dữ liệu được ghi vĩnh viễn vào các tệp CSDL trên ổ cứng máy chủ."
        },
        {
          "text": "d) An có thể xuất cấu trúc và dữ liệu vừa tạo ra tệp `.sql` để chia sẻ cho các bạn trong nhóm thực hành cùng sử dụng.",
          "answer": true,
          "explain": "Đúng. Tính năng Export database as SQL cho phép chia sẻ CSDL dễ dàng."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b19-es1",
      "q": "Nêu 4 thông số kỹ thuật bắt buộc phải cấu hình khi thiết lập kết nối từ HeidiSQL tới máy chủ CSDL MySQL/MariaDB.",
      "answer": "Bốn thông số kỹ thuật bắt buộc khi cấu hình kết nối HeidiSQL:\n1. Hostname / IP: Địa chỉ máy chủ CSDL (ví dụ `localhost` hoặc `127.0.0.1` nếu chạy trên cùng máy).\n2. User: Tên tài khoản người dùng có quyền đăng nhập vào CSDL (mặc định là `root`).\n3. Password: Mật khẩu bảo mật tương ứng của tài khoản quản trị.\n4. Port: Cổng mạng kết nối của máy chủ CSDL (mặc định của MySQL/MariaDB là 3306)."
    },
    {
      "id": "b19-es2",
      "q": "Tại sao trong thiết kế CSDL quan hệ, các bảng đơn giản (bảng độc lập/bảng danh mục như `casi`, `nhacsi`) cần được tạo lập trước các bảng có khóa ngoài tham chiếu (như `bannhac`)?",
      "answer": "Bởi vì các bảng độc lập đóng vai trò là 'bảng cha' (bảng cung cấp khóa chính). Bảng con (như `bannhac`) chứa các trường khóa ngoài tham chiếu tới các khóa chính này. Nếu bảng cha chưa được tạo thì bảng con không thể thiết lập ràng buộc toàn vẹn tham chiếu (Foreign Key Constraint), hệ QTCSDL sẽ báo lỗi không tìm thấy bảng được tham chiếu."
    },
    {
      "id": "b19-es3",
      "q": "Trình bày ý nghĩa của hai thuộc tính PRIMARY KEY và AUTO_INCREMENT khi áp dụng cho cột khóa chính `idCasi` trong bảng `casi`.",
      "answer": "- PRIMARY KEY (Khóa chính): Đảm bảo giá trị của cột `idCasi` là duy nhất trong toàn bảng và không bao giờ nhận giá trị rỗng (NOT NULL), giúp định danh phân biệt chính xác từng ca sĩ.\n- AUTO_INCREMENT (Tự tăng): Giúp hệ QTCSDL tự động gán giá trị số nguyên tăng dần (1, 2, 3,...) cho bản ghi mới mỗi khi thêm vào bảng mà người dùng không cần phải nhập mã số thủ công, tránh tối đa việc nhập trùng lặp hoặc nhầm lẫn."
    },
    {
      "id": "b19-es4",
      "q": "Viết câu lệnh SQL hoàn chỉnh để tạo bảng `nhacsi` gồm 2 trường: `idNhacsi` (khóa chính, số nguyên tự tăng) và `tenNhacsi` (chuỗi ký tự tối đa 100 ký tự, không được để trống).",
      "answer": "CREATE TABLE nhacsi (\n    idNhacsi INT AUTO_INCREMENT PRIMARY KEY,\n    tenNhacsi VARCHAR(100) NOT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;"
    }
  ]
};

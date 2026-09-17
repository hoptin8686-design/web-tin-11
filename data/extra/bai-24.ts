import { LessonExtra } from "@/lib/types";

// Bài 24: Thực hành: Sao lưu dữ liệu (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b24-tf1",
      "context": "Trong giờ thực hành Tin học 11, học sinh thực hiện sao lưu CSDL my_music bằng phần mềm HeidiSQL và tìm hiểu các tùy chọn xuất file.",
      "statements": [
        {
          "text": "Học sinh có thể xuất toàn bộ cấu trúc và dữ liệu của CSDL my_music thành một file kịch bản SQL duy nhất.",
          "answer": true,
          "explain": "Đúng. Đây là tính năng Export database as SQL phổ biến nhất của HeidiSQL."
        },
        {
          "text": "File kịch bản SQL sau khi xuất ra là file nhị phân mã hóa và không thể mở đọc bằng chương trình Notepad.",
          "answer": false,
          "explain": "Sai. File .sql là file văn bản thuần (plain text) chứa các câu lệnh SQL, hoàn toàn mở và chỉnh sửa được bằng Notepad."
        },
        {
          "text": "Tùy chọn 'Drop' cho bảng trong hộp thoại xuất giúp tự động thêm câu lệnh DROP TABLE IF EXISTS vào file kịch bản.",
          "answer": true,
          "explain": "Đúng. Giúp xóa bảng cũ trước khi nạp lại cấu trúc mới khi phục hồi."
        },
        {
          "text": "Sau khi sao lưu, ta có thể xóa vĩnh viễn CSDL trên máy chủ vì file sao lưu sẽ tự động đồng bộ thời gian thực với các giao dịch mới.",
          "answer": false,
          "explain": "Sai. File sao lưu chỉ là ảnh chụp tĩnh tại thời điểm xuất, không tự động đồng bộ với dữ liệu mới phát sinh."
        }
      ]
    },
    {
      "id": "b24-tf2",
      "context": "Xét tình huống máy tính thực hành bị lỗi hệ điều hành và CSDL my_music bị mất. Học sinh sử dụng file sao lưu my_music_backup.sql để phục hồi lại dữ liệu.",
      "statements": [
        {
          "text": "Học sinh có thể mở HeidiSQL, chọn menu File -> Load SQL file... và chọn file my_music_backup.sql để chạy phục hồi.",
          "answer": true,
          "explain": "Đúng. Đây là thao tác phục hồi dữ liệu từ file sao lưu trên giao diện HeidiSQL."
        },
        {
          "text": "Nếu file SQL sao lưu chưa có câu lệnh CREATE DATABASE, học sinh phải tạo một CSDL rỗng trước rồi mới thực thi nạp file vào CSDL đó.",
          "answer": true,
          "explain": "Đúng. Cần có CSDL đích để các câu lệnh CREATE TABLE và INSERT INTO biết nơi lưu trữ."
        },
        {
          "text": "Quá trình phục hồi từ file sao lưu sẽ khôi phục lại cả những bài hát được thêm vào sau thời điểm tạo file sao lưu.",
          "answer": false,
          "explain": "Sai. Dữ liệu chỉ được phục hồi về đúng trạng thái tại thời điểm thực hiện sao lưu; dữ liệu phát sinh sau đó sẽ bị mất."
        },
        {
          "text": "Việc phục hồi có thể thực hiện trên một máy tính hoàn toàn khác đã cài đặt hệ QTCSDL MySQL/MariaDB.",
          "answer": true,
          "explain": "Đúng. File kịch bản SQL có tính di động rất cao giữa các hệ thống MySQL/MariaDB."
        }
      ]
    },
    {
      "id": "b24-tf3",
      "context": "Đánh giá về chiến lược và các nguyên tắc bảo đảm an toàn dữ liệu cho hệ thống thông tin.",
      "statements": [
        {
          "text": "Quy tắc 3-2-1 khuyến nghị luôn duy trì ít nhất 3 bản sao lưu dữ liệu trên ít nhất 2 loại phương tiện khác nhau và 1 bản đặt ở vị trí cách ly ngoại vi.",
          "answer": true,
          "explain": "Đúng. Đây là tiêu chuẩn vàng trong quản trị an toàn dữ liệu trên toàn cầu."
        },
        {
          "text": "Chỉ cần cài phần mềm diệt virus bản quyền là hệ thống hoàn toàn miễn nhiễm với nguy cơ mất dữ liệu và không cần phải sao lưu.",
          "answer": false,
          "explain": "Sai. Phần mềm diệt virus không chống được lỗi hỏng phần cứng, mất điện đột ngột hay thao tác nhầm của con người."
        },
        {
          "text": "Nên đặt lịch sao lưu tự động vào các thời điểm hệ thống ít người truy cập (như nửa đêm) để không ảnh hưởng đến hiệu năng phục vụ người dùng.",
          "answer": true,
          "explain": "Đúng. Sao lưu CSDL lớn có thể chiếm nhiều I/O ổ đĩa và mạng nên thường chạy vào ban đêm."
        },
        {
          "text": "File sao lưu CSDL có chứa thông tin mật khẩu người dùng không cần đặt mật khẩu bảo vệ hay mã hóa.",
          "answer": false,
          "explain": "Sai. File sao lưu chứa toàn bộ thông tin nhạy cảm của CSDL nên cần được mã hóa và phân quyền bảo mật nghiêm ngặt."
        }
      ]
    },
    {
      "id": "b24-tf4",
      "context": "Xét công cụ dòng lệnh mysqldump và việc tự động hóa sao lưu trong môi trường máy chủ.",
      "statements": [
        {
          "text": "mysqldump là công cụ dòng lệnh được tích hợp sẵn trong bộ cài MySQL hỗ trợ xuất CSDL ra file văn bản .sql.",
          "answer": true,
          "explain": "Đúng. mysqldump là công cụ chuẩn của MySQL."
        },
        {
          "text": "Lệnh mysqldump chỉ có thể sao lưu từng bảng riêng lẻ chứ không thể sao lưu toàn bộ tất cả các CSDL trên máy chủ cùng lúc.",
          "answer": false,
          "explain": "Sai. mysqldump có tùy chọn --all-databases cho phép sao lưu toàn bộ các CSDL trên server chỉ với 1 câu lệnh."
        },
        {
          "text": "Trên hệ điều hành Windows, ta có thể kết hợp Task Scheduler với một file kịch bản .bat chứa lệnh mysqldump để tự động sao lưu hàng ngày.",
          "answer": true,
          "explain": "Đúng. Đây là giải pháp tự động hóa sao lưu rất phổ biến trên Windows Server."
        },
        {
          "text": "Bản sao lưu chỉ chứa cấu trúc (Structure only) có dung lượng nhỏ hơn rất nhiều so với bản sao lưu chứa cả dữ liệu (Structure + Data).",
          "answer": true,
          "explain": "Đúng. Vì nó chỉ chứa vài chục dòng lệnh định nghĩa bảng mà không chứa hàng triệu dòng dữ liệu INSERT."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b24-es1",
      "q": "Trình bày mục đích chính của việc sao lưu dữ liệu và nêu ít nhất hai nguyên nhân có thể dẫn đến mất mát dữ liệu trong thực tế.",
      "answer": "- Mục đích: Tạo ra các bản sao dự phòng an toàn của CSDL để có thể nhanh chóng khôi phục lại hệ thống khi xảy ra sự cố, đảm bảo tính liên tục của hoạt động quản lý.\n- Hai nguyên nhân: 1) Hỏng hóc phần cứng (cháy nổ ổ cứng, lỗi máy chủ); 2) Do phần mềm độc hại (mã độc tống tiền ransomware mã hóa dữ liệu) hoặc do thao tác sai sót của con người (vô tình xóa nhầm dữ liệu)."
    },
    {
      "id": "b24-es2",
      "q": "Nêu các bước cơ bản để sao lưu một cơ sở dữ liệu thành file .sql bằng phần mềm HeidiSQL.",
      "answer": "1. Kết nối vào máy chủ CSDL và mở HeidiSQL.\n2. Nhấp chuột phải vào tên cơ sở dữ liệu cần sao lưu trong danh sách bên trái -> Chọn 'Export database as SQL'.\n3. Trong hộp thoại xuất hiện: Chọn CSDL cần xuất; tại mục Table chọn Structure và Data; tại mục Output chọn 'Single .sql file' và chọn đường dẫn lưu file.\n4. Nhấn nút 'Export' để phần mềm tiến hành trích xuất dữ liệu ra file."
    },
    {
      "id": "b24-es3",
      "q": "Nêu ý nghĩa của quy tắc sao lưu dữ liệu 3-2-1 trong quản trị hệ thống.",
      "answer": "Quy tắc 3-2-1 quy định:\n- 3: Phải lưu giữ ít nhất 3 bản sao của dữ liệu (1 bản chính đang chạy và 2 bản dự phòng).\n- 2: Lưu trữ trên ít nhất 2 loại thiết bị/phương tiện khác nhau (ví dụ: ổ cứng máy chủ và ổ cứng di động rời).\n- 1: Phải có ít nhất 1 bản sao lưu được lưu trữ ở vị trí cách ly địa lý (off-site hoặc lưu trữ đám mây Cloud) nhằm phòng chống thảm họa cháy nổ, trộm cắp tại chỗ."
    },
    {
      "id": "b24-es4",
      "q": "Viết câu lệnh dòng lệnh mysqldump để sao lưu cơ sở dữ liệu có tên 'quanly_amnhac' của người dùng 'root' ra file 'backup_amnhac.sql'.",
      "answer": "mysqldump -u root -p quanly_amnhac > backup_amnhac.sql"
    }
  ]
};

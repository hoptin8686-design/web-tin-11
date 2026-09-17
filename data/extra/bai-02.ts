import { LessonExtra } from "@/lib/types";

// Bài 2: Thực hành sử dụng hệ điều hành (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b2-tf1",
      "context": "Máy tính của bạn Lan sau hơn một năm sử dụng bỗng nhiên hoạt động rất chậm chạp, ổ đĩa C báo dung lượng màu đỏ sắp đầy và thời gian khởi động kéo dài. Bạn Nam hướng dẫn Lan sử dụng các tiện ích bảo trì hệ thống của Windows để khắc phục:",
      "statements": [
        {
          "text": "a) Lan có thể dùng tiện ích Disk Cleanup để quét và dọn dẹp các tệp tạm thời, tệp rác trong thùng rác mà không làm mất tài liệu cá nhân quan trọng.",
          "answer": true,
          "explain": "Đúng. Disk Cleanup chỉ xóa các tệp tạm, bộ đệm hệ thống không còn dùng, giải phóng an toàn bộ nhớ."
        },
        {
          "text": "b) Tiện ích Check Disk giúp phát hiện và sửa các lỗi logic trong hệ thống tệp và đánh dấu các sector vật lý bị hỏng trên ổ đĩa.",
          "answer": true,
          "explain": "Đúng. Đây là tính năng cốt lõi của công cụ Error Checking / chkdsk."
        },
        {
          "text": "c) Lan nên tiến hành chạy công cụ Defragment (chống phân mảnh) liên tục mỗi ngày trên ổ đĩa SSD của máy tính để tăng tốc độ.",
          "answer": false,
          "explain": "Sai. Ổ đĩa SSD không cần chống phân mảnh truyền thống; việc chạy liên tục sẽ làm hao mòn và giảm tuổi thọ chip nhớ flash của SSD."
        },
        {
          "text": "d) Sau khi dùng Disk Cleanup, dung lượng bộ nhớ RAM vật lý của máy tính sẽ tự động tăng thêm 16GB.",
          "answer": false,
          "explain": "Sai. Disk Cleanup giải phóng dung lượng ổ cứng (Storage), không thể làm tăng dung lượng phần cứng RAM vật lý."
        }
      ]
    },
    {
      "id": "b2-tf2",
      "context": "Trong buổi thực hành Tin học tại phòng máy trường THPT Phục Hòa, thầy giáo yêu cầu học sinh sử dụng Task Manager để giám sát tình trạng hệ thống khi đang mở nhiều phần mềm nặng:",
      "statements": [
        {
          "text": "a) Task Manager hiển thị tỷ lệ % sử dụng của CPU, Memory (RAM), Disk và Network của từng tiến trình đang chạy.",
          "answer": true,
          "explain": "Đúng. Tab Processes trong Task Manager cho biết chi tiết mức tiêu thụ tài nguyên của từng ứng dụng."
        },
        {
          "text": "b) Khi một ứng dụng bị đóng băng (treo), học sinh có thể chọn ứng dụng đó và ấn 'End task' để buộc đóng tiến trình đó.",
          "answer": true,
          "explain": "Đúng. End task là thao tác chuẩn để chấm dứt các ứng dụng không phản hồi."
        },
        {
          "text": "c) Tắt bớt các ứng dụng không cần thiết trong tab Startup apps sẽ giúp rút ngắn thời gian khởi động Windows.",
          "answer": true,
          "explain": "Đúng. Giảm số lượng tiến trình nạp lúc bật máy giúp giải phóng CPU và RAM cho hệ điều hành."
        },
        {
          "text": "d) Task Manager là phần mềm độc hại có nguồn gốc từ Internet mà giáo viên cài thêm vào máy tính.",
          "answer": false,
          "explain": "Sai. Task Manager là tiện ích hệ thống chính thức được tích hợp sẵn trong mọi phiên bản hệ điều hành Windows."
        }
      ]
    },
    {
      "id": "b2-tf3",
      "context": "Khi học về an toàn và bảo mật trên thiết bị di động (smartphone), nhóm học sinh thảo luận về các giải pháp bảo vệ dữ liệu cá nhân:",
      "statements": [
        {
          "text": "a) Phương pháp đăng nhập sinh trắc học như vân tay hoặc nhận diện khuôn mặt mang lại sự tiện lợi và tính bảo mật cao hơn việc không đặt mật khẩu.",
          "answer": true,
          "explain": "Đúng. Dữ liệu sinh trắc học gắn liền với đặc điểm cơ thể cá nhân, khó bị người lạ đoán biết hơn mã số đơn giản."
        },
        {
          "text": "b) Người dùng có thể tùy ý tải các tệp cài đặt đuôi .apk không rõ nguồn gốc từ các trang web lạ về điện thoại Android mà hoàn toàn không có nguy cơ lây nhiễm mã độc.",
          "answer": false,
          "explain": "Sai. Tệp cài ngoài chợ ứng dụng chính thức (sideloading) từ nguồn trôi nổi là con đường phổ biến nhất phát tán phần mềm độc hại và gián điệp."
        },
        {
          "text": "c) Tính năng 'Tìm thiết bị' (Find My Device / Find My iPhone) cho phép định vị và khóa máy hoặc xóa dữ liệu từ xa khi điện thoại bị thất lạc.",
          "answer": true,
          "explain": "Đúng. Đây là tính năng bảo vệ an toàn sống còn cho thiết bị di động khi bị rơi hoặc mất trộm."
        },
        {
          "text": "d) Mọi hình ảnh và tin nhắn cá nhân trên điện thoại di động sẽ tự động công khai lên mạng xã hội nếu người dùng bật định vị GPS.",
          "answer": false,
          "explain": "Sai. Bật GPS chỉ cung cấp tọa độ địa lý cho các ứng dụng được cấp quyền (như Google Maps), không tự ý chia sẻ ảnh lên mạng xã hội."
        }
      ]
    },
    {
      "id": "b2-tf4",
      "context": "Khi thực hiện các thao tác quản lý tệp và thư mục trên File Explorer của hệ điều hành Windows:",
      "statements": [
        {
          "text": "a) Hai tệp tin cùng nằm trong một thư mục không được phép có tên và phần mở rộng giống hệt nhau.",
          "answer": true,
          "explain": "Đúng. Trong cùng một thư mục, tên tệp (gồm tên chính và phần mở rộng) phải là duy nhất."
        },
        {
          "text": "b) Khi xóa tệp bằng phím Delete thông thường, tệp được chuyển vào Recycle Bin và người dùng có thể khôi phục lại khi cần.",
          "answer": true,
          "explain": "Đúng. Recycle Bin đóng vai trò lưu trữ tạm thời các tệp bị xóa để phòng ngừa thao tác nhầm."
        },
        {
          "text": "c) Thao tác Format một ổ đĩa USB sẽ giữ nguyên toàn bộ dữ liệu cũ và chỉ tăng tốc độ truyền tệp của USB.",
          "answer": false,
          "explain": "Sai. Thao tác Format xóa toàn bộ dữ liệu trên ổ đĩa để tái tạo hệ thống tệp mới."
        },
        {
          "text": "d) Ta có thể nén nhiều tệp tin và thư mục thành một tệp đuôi .zip duy nhất để tiện gửi qua thư điện tử.",
          "answer": true,
          "explain": "Đúng. Nén tệp giúp giảm dung lượng tổng thể và thuận tiện khi đính kèm gửi qua Internet."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b2-es1",
      "q": "Trình bày mục đích và các bước thực hiện thao tác dọn dẹp ổ đĩa bằng tiện ích Disk Cleanup trên Windows.",
      "answer": "1. Mục đích: Quét và giải phóng dung lượng ổ đĩa bằng cách xóa an toàn các tệp tin tạm thời, tệp trong Thùng rác (Recycle Bin), tệp tải về tạm và các bản cập nhật Windows cũ không còn dùng.\n\n2. Các bước thực hiện:\n- Bước 1: Mở File Explorer, nhấp chuột phải vào phân vùng ổ đĩa cần dọn dẹp (thường là ổ C:) chọn Properties.\n- Bước 2: Trong thẻ General, nhấp chọn nút 'Disk Cleanup'.\n- Bước 3: Hệ thống quét các tệp rác. Trong danh sách 'Files to delete', tích chọn các mục cần xóa (Temporary files, Recycle Bin, Thumbnails...).\n- Bước 4: Nhấn nút OK, sau đó chọn 'Delete Files' để xác nhận dọn dẹp."
    },
    {
      "id": "b2-es2",
      "q": "Phân biệt nguyên nhân gây chậm máy tính giữa ổ đĩa HDD và ổ đĩa SSD. Vì sao công cụ chống phân mảnh (Defragment) hữu ích với HDD nhưng lại không nên dùng cho SSD?",
      "answer": "1. Với ổ HDD: Lưu dữ liệu trên các phiến đĩa từ quay cơ học và đọc bằng đầu từ. Khi bị phân mảnh, một tệp bị cắt nhỏ ở nhiều cung từ xa nhau khiến đầu đọc cơ học phải dịch chuyển liên tục, gây giảm tốc độ rõ rệt. Chống phân mảnh sắp xếp các khối dữ liệu liền kề giúp đầu đọc quét một mạch liên tục, tăng tốc độ đọc.\n\n2. Với ổ SSD: Lưu dữ liệu trên các chip nhớ bán dẫn Flash NAND, thời gian truy xuất mọi ô nhớ là gần như tức thời bằng nhau (không có đầu đọc cơ học chuyển động), do đó dữ liệu có phân tán cũng không làm chậm máy.\n\n3. Lý do không Defrag cho SSD: Chip nhớ Flash có số lần ghi xóa hữu hạn (độ bền chu kỳ P/E). Chống phân mảnh liên tục thực hiện hàng nghìn lượt ghi chép di dời dữ liệu sẽ làm chai các tế bào nhớ và giảm tuổi thọ của ổ SSD mà không đem lại lợi ích tốc độ nào."
    },
    {
      "id": "b2-es3",
      "q": "Khi phát hiện máy tính hoạt động chậm bất thường, quạt tản nhiệt quay to, em sẽ dùng công cụ Task Manager như thế nào để phát hiện và xử lý ứng dụng gây nghẽn tài nguyên?",
      "answer": "Cách dùng Task Manager để chẩn đoán và khắc phục:\n1. Nhấn tổ hợp phím Ctrl + Shift + Esc để mở ngay Task Manager.\n2. Tại tab Processes, nhấp chuột vào tiêu đề cột 'CPU' hoặc 'Memory' để sắp xếp các ứng dụng theo thứ tự tiêu thụ tài nguyên từ cao xuống thấp.\n3. Quan sát ứng dụng nào đang chiếm bất thường (ví dụ CPU 80-100% liên tục hoặc ngốn nhiều GB RAM).\n4. Nếu đó là ứng dụng đang bị treo (Not responding) hoặc phần mềm không cần thiết, nhấp chuột chọn ứng dụng đó và nhấn nút 'End task' ở góc dưới để giải phóng tài nguyên CPU/RAM ngay lập tức."
    },
    {
      "id": "b2-es4",
      "q": "Nêu 3 biện pháp kỹ thuật giúp bảo vệ dữ liệu và an toàn thông tin khi sử dụng điện thoại thông minh (smartphone).",
      "answer": "Ba biện pháp kỹ thuật quan trọng:\n1. Thiết lập khóa màn hình bảo mật cao: Kích hoạt mật khẩu mã PIN kết hợp sinh trắc học (quét vân tay hoặc khuôn mặt 3D), tránh dùng các mật khẩu dễ đoán như 123456 hay ngày sinh.\n2. Chỉ cài đặt ứng dụng từ kho ứng dụng chính thức: Sử dụng Google Play Store (Android) hoặc Apple App Store (iOS); tuyệt đối không cài đặt các tệp tin .apk hoặc ứng dụng bẻ khóa (crack) từ các liên kết lạ trên mạng.\n3. Bật tính năng định vị và quản lý thiết bị từ xa: Kích hoạt 'Find My Device' (Android) hoặc 'Find My' (iOS), định kỳ sao lưu dữ liệu ảnh, danh bạ lên đám mây và luôn cập nhật phiên bản hệ điều hành mới nhất để vá các lỗ hổng bảo mật."
    }
  ]
};

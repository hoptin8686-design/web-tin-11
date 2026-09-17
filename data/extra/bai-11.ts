import { LessonExtra } from "@/lib/types";

// Bài 11: Cơ sở dữ liệu (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b11-tf1",
      "context": "Khi học về khái niệm và đặc trưng của Cơ sở dữ liệu (CSDL), bạn An và bạn Bình có cuộc trao đổi về bản chất của CSDL trong Tin học:",
      "statements": [
        {
          "text": "a) CSDL là tập hợp các dữ liệu có liên quan với nhau, được tổ chức lưu trữ theo cấu trúc trên máy tính để nhiều người có thể cùng khai thác.",
          "answer": true,
          "explain": "Đúng. Đây là định nghĩa khoa học cốt lõi của CSDL."
        },
        {
          "text": "b) Một tệp văn bản .txt lưu bài thơ tự sáng tác trên màn hình Desktop được coi là một hệ cơ sở dữ liệu quy mô lớn.",
          "answer": false,
          "explain": "Sai. Một tệp văn bản đơn lẻ không có cấu trúc quản lý quan hệ, không có công cụ quản trị thì không phải CSDL."
        },
        {
          "text": "c) Tính không dư thừa giúp tiết kiệm dung lượng bộ nhớ và ngăn ngừa nguy cơ mâu thuẫn dữ liệu khi cập nhật.",
          "answer": true,
          "explain": "Đúng. Giảm dư thừa đồng nghĩa với việc loại bỏ các bản sao thừa thãi."
        },
        {
          "text": "d) CSDL chỉ được phép phục vụ duy nhất cho một phần mềm duy nhất và cấm tuyệt đối mọi sự chia sẻ cho phần mềm khác.",
          "answer": false,
          "explain": "Sai. Bản chất của CSDL là phục vụ cho nhiều ứng dụng và nhiều đối tượng người dùng khác nhau cùng khai thác."
        }
      ]
    },
    {
      "id": "b11-tf2",
      "context": "Về tính độc lập dữ liệu (Data Independence) trong hệ thống cơ sở dữ liệu:",
      "statements": [
        {
          "text": "a) Tính độc lập vật lý đảm bảo việc thay đổi ổ đĩa lưu trữ từ HDD sang SSD không làm thay đổi cấu trúc bảng logic của CSDL.",
          "answer": true,
          "explain": "Đúng. Tầng vật lý thay đổi độc lập với tầng logic bên trên."
        },
        {
          "text": "b) Tính độc lập logic cho phép bổ sung thêm một trường thông tin mới vào bảng mà không làm hỏng các chương trình ứng dụng cũ không dùng trường đó.",
          "answer": true,
          "explain": "Đúng. Các ứng dụng cũ chỉ truy xuất các trường nó cần nên không bị ảnh hưởng."
        },
        {
          "text": "c) Nếu không có tính độc lập dữ liệu, mỗi lần nâng cấp phần cứng ổ đĩa thì lập trình viên phải viết lại toàn bộ mã nguồn của phần mềm ứng dụng.",
          "answer": true,
          "explain": "Đúng. Đây chính là thảm họa của các hệ thống cũ trước khi có CSDL."
        },
        {
          "text": "d) Tính độc lập dữ liệu có nghĩa là dữ liệu hoàn toàn không liên quan gì đến các hoạt động của con người.",
          "answer": false,
          "explain": "Sai. Độc lập dữ liệu là khái niệm kỹ thuật về sự độc lập giữa các tầng kiến trúc trong hệ thống máy tính."
        }
      ]
    },
    {
      "id": "b11-tf3",
      "context": "Về tính toàn vẹn và tính nhất quán của dữ liệu:",
      "statements": [
        {
          "text": "a) Quy tắc 'Điểm học sinh phải nằm trong thang điểm từ 0 đến 10' là một ví dụ về ràng buộc toàn vẹn miền giá trị.",
          "answer": true,
          "explain": "Đúng. Ràng buộc miền giá trị chặn các số điểm bất hợp lý."
        },
        {
          "text": "b) Tính nhất quán đảm bảo rằng sau một giao dịch chuyển tiền ngân hàng, tổng số tiền bị trừ ở bên gửi phải bằng đúng số tiền được cộng ở bên nhận.",
          "answer": true,
          "explain": "Đúng. Đây là ví dụ kinh điển về tính nhất quán trong CSDL tài chính."
        },
        {
          "text": "c) Khi cơ sở dữ liệu bị dư thừa dữ liệu ở nhiều bảng, nguy cơ xảy ra mâu thuẫn mất nhất quán sẽ tăng lên rất cao khi có thao tác sửa đổi.",
          "answer": true,
          "explain": "Đúng. Dư thừa dữ liệu là nguyên nhân hàng đầu dẫn tới mất nhất quán."
        },
        {
          "text": "d) Một cơ sở dữ liệu tốt cho phép người dùng thoải mái nhập ngày sinh của học sinh là ngày 30 tháng 2.",
          "answer": false,
          "explain": "Sai. Hệ thống CSDL có ràng buộc toàn vẹn sẽ lập tức phát hiện và từ chối ngày tháng không có thật."
        }
      ]
    },
    {
      "id": "b11-tf4",
      "context": "Về an toàn, bảo mật và khả năng phục vụ đa người dùng của cơ sở dữ liệu:",
      "statements": [
        {
          "text": "a) Cơ chế kiểm soát truy cập đồng thời giúp ngăn chặn việc hai khách hàng cùng đặt mua thành công cùng một ghế máy bay tại một thời điểm.",
          "answer": true,
          "explain": "Đúng. Cơ chế khóa giao dịch ngăn chặn xung đột bán trùng vé."
        },
        {
          "text": "b) An toàn và bảo mật CSDL đòi hỏi phải có cơ chế phân quyền: ai được phép xem, ai được phép sửa đổi từng phần dữ liệu.",
          "answer": true,
          "explain": "Đúng. Phân quyền là biện pháp bảo mật căn bản nhất của CSDL."
        },
        {
          "text": "c) Cơ sở dữ liệu tự động có khả năng chống lại mọi vụ nổ bom nguyên tử mà không cần sao lưu dự phòng.",
          "answer": false,
          "explain": "Sai. Mọi hệ thống CSDL đều phải duy trì chính sách sao lưu định kỳ (Backup) ra nhiều trung tâm dữ liệu độc lập để phòng chống thiên tai thảm họa."
        },
        {
          "text": "d) Nhờ có CSDL tập trung, các cơ quan ban ngành có thể chia sẻ và liên thông dữ liệu quốc gia (như CSDL quốc gia về dân cư).",
          "answer": true,
          "explain": "Đúng. Đây là nền tảng của chính phủ điện tử và chuyển đổi số quốc gia."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b11-es1",
      "q": "Cơ sở dữ liệu là gì? Nêu và phân tích ngắn gọn 4 đặc trưng cơ bản của một cơ sở dữ liệu theo chương trình Tin học 11.",
      "answer": "1. Khái niệm CSDL: Cơ sở dữ liệu là một tập hợp các dữ liệu có liên quan với nhau, được tổ chức lưu trữ có cấu trúc trên các thiết bị nhớ máy tính nhằm đáp ứng nhu cầu khai thác thông tin đồng thời của nhiều người dùng và nhiều chương trình ứng dụng khác nhau.\n\n2. Bốn đặc trưng cơ bản:\n- Tính độc lập dữ liệu (Data Independence): Dữ liệu tách biệt khỏi các chương trình ứng dụng. Bao gồm độc lập vật lý (thay đổi thiết bị ổ đĩa lưu trữ không làm đổi cấu trúc logic) và độc lập logic (thay đổi cấu trúc CSDL không làm hỏng mã nguồn phần mềm ứng dụng cũ).\n- Tính không dư thừa dữ liệu (Minimal Redundancy): Dữ liệu không bị lặp đi lặp lại một cách thừa thãi ở nhiều bảng khác nhau, giúp tiết kiệm không gian lưu trữ và tránh nguy cơ mâu thuẫn số liệu.\n- Tính nhất quán dữ liệu (Consistency): Dữ liệu luôn chính xác và đồng nhất tại mọi thời điểm trong toàn bộ hệ thống; sau mọi giao dịch cập nhật, dữ liệu không bao giờ rơi vào trạng thái mâu thuẫn lẫn nhau.\n- Tính toàn vẹn dữ liệu (Data Integrity): Dữ liệu lưu trong CSDL luôn tuân thủ các ràng buộc logic thực tế (ràng buộc miền giá trị, ràng buộc khóa chính, toàn vẹn tham chiếu khóa ngoại), đảm bảo phản ánh đúng thực tế khách quan."
    },
    {
      "id": "b11-es2",
      "q": "Thế nào là 'Tính độc lập vật lý' và 'Tính độc lập logic' của dữ liệu trong CSDL? Nêu ví dụ thực tế minh họa cho mỗi cấp độ độc lập.",
      "answer": "1. Tính độc lập vật lý:\n- Khái niệm: Khả năng thay đổi cách tổ chức lưu trữ vật lý của dữ liệu trên các thiết bị nhớ (như chuyển CSDL từ ổ cứng HDD sang ổ SSD siêu tốc, thay đổi thuật toán lập chỉ mục Index, đổi đường dẫn thư mục lưu trữ) mà KHÔNG làm thay đổi cấu trúc bảng logic cũng như không phải sửa đổi các chương trình ứng dụng đang chạy.\n- Ví dụ: Nhà trường thay thế toàn bộ ổ cứng của máy chủ bằng ổ SSD NVMe mới để tăng tốc độ. Cấu trúc bảng học sinh và phần mềm xem điểm của phụ huynh vẫn hoạt động hoàn toàn bình thường, không cần viết lại một dòng mã lệnh nào.\n\n2. Tính độc lập logic:\n- Khái niệm: Khả năng thay đổi, mở rộng cấu trúc logic của cơ sở dữ liệu (như bổ sung thêm một bảng mới, hoặc thêm một cột mới vào bảng hiện có) mà KHÔNG làm ảnh hưởng đến các chương trình ứng dụng cũ đang khai thác các cột dữ liệu khác.\n- Ví dụ: Trong bảng HỌC_SINH, nhà trường bổ sung thêm cột 'Mã định danh CCCD' để phục vụ quản lý mới. Phần mềm thư viện cũ (chỉ đọc cột Mã học sinh và Họ tên) vẫn tiếp tục chạy bình thường mà không bị báo lỗi."
    },
    {
      "id": "b11-es3",
      "q": "Hiện tượng 'Mất nhất quán dữ liệu' là gì? Mối quan hệ giữa sự dư thừa dữ liệu và sự mất nhất quán dữ liệu diễn ra như thế nào?",
      "answer": "1. Khái niệm mất nhất quán dữ liệu: Là hiện tượng dữ liệu về cùng một đối tượng thực tế nhưng lại mang các giá trị trái ngược nhau, mâu thuẫn nhau ở các vị trí lưu trữ khác nhau trong hệ thống, khiến người quản lý không thể biết thông tin nào mới là sự thật.\n\n2. Mối quan hệ giữa dư thừa và mất nhất quán:\n- Dư thừa dữ liệu là nguồn gốc trực tiếp sinh ra mất nhất quán: Khi một thông tin (ví dụ: Số điện thoại của phụ huynh) bị ghi lặp lại ở 3 file/bảng khác nhau (bảng Điểm, bảng Sổ liên lạc điện tử, bảng Đoàn thanh niên).\n- Khi xảy ra cập nhật: Nếu phụ huynh đổi số điện thoại mới và chỉ báo cho giáo viên chủ nhiệm sửa ở bảng Sổ liên lạc, trong khi hai bảng kia vẫn giữ số điện thoại cũ. Lúc này, cùng một phụ huynh nhưng hệ thống có 2 số điện thoại khác nhau, dẫn đến tình trạng mất nhất quán dữ liệu nghiêm trọng."
    },
    {
      "id": "b11-es4",
      "q": "Một hệ thống bán vé máy bay trực tuyến phục vụ hàng triệu hành khách mỗi ngày cần giải quyết bài toán đặt vé đồng thời như thế nào để đảm bảo tính toàn vẹn và nhất quán của CSDL?",
      "answer": "Cách hệ thống giải quyết bài toán đặt vé đồng thời:\n1. Sử dụng cơ chế Giao dịch (Transaction) có tính nguyên tử (Atomicity): Quá trình đặt vé gồm chuỗi thao tác: kiểm tra ghế trống -> trừ tiền tài khoản khách -> gán mã khách vào ghế -> đổi trạng thái ghế sang 'Đã bán'. Tất cả các bước này phải thành công trọn vẹn 100%; nếu xảy ra sự cố nghẽn mạng ở khâu trừ tiền, hệ thống lập tức khôi phục (Rollback) giải phóng ghế lại trạng thái trống.\n2. Cơ chế khóa dữ liệu (Locking / Concurrency Control): Khi hành khách A nhấp chọn ghế 12A và tiến hành thanh toán, hệ thống sẽ tạm thời 'khóa' bản ghi ghế 12A lại trong vòng 10 phút. Trong thời gian này, hành khách B cũng mở cùng chuyến bay sẽ thấy ghế 12A báo trạng thái 'Đang giao dịch' và không thể nhấp chọn.\n3. Ràng buộc toàn vẹn khóa duy nhất (Unique Constraint): Thiết lập trường 'Mã ghế' kết hợp 'Mã chuyến bay' là duy nhất, ngăn chặn tuyệt đối lỗi thuật toán có thể ghi nhận hai vé khác nhau trên cùng một vị trí ghế ngồi."
    }
  ]
};

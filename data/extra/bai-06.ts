import { LessonExtra } from "@/lib/types";

// Bài 6: Lưu trữ và chia sẻ tệp tin trên Internet (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b6-tf1",
      "context": "Lớp 11A thực hiện một dự án học tập về 'Bảo vệ môi trường địa phương'. Nhóm bạn Nam được giao quản lý thư mục tài liệu dự án trên Google Drive để các bạn cùng đóng góp tư liệu:",
      "statements": [
        {
          "text": "a) Nam có thể tải cả một thư mục chứa nhiều bài viết và hình ảnh từ máy tính lên Google Drive bằng lệnh 'Tải thư mục lên'.",
          "answer": true,
          "explain": "Đúng. Google Drive hỗ trợ tải nguyên cả cây thư mục lên đám mây."
        },
        {
          "text": "b) Quyền 'Người nhận xét' (Commenter) cho phép các bạn trong lớp ghi chú góp ý nội dung mà không sợ vô tình xóa nhầm văn bản của người khác.",
          "answer": true,
          "explain": "Đúng. Đây là tính năng nhận xét an toàn rất hữu ích cho làm việc nhóm."
        },
        {
          "text": "c) Mọi tệp tải lên Google Drive đều tự động hiển thị công khai cho tất cả người dùng trên toàn thế giới xem được ngay cả khi chưa chia sẻ.",
          "answer": false,
          "explain": "Sai. Tệp mới tải lên mặc định ở chế độ Riêng tư (Private), chỉ có chủ tài khoản mới xem được trừ khi chủ động chia sẻ."
        },
        {
          "text": "d) Nam có thể xem lại lịch sử các phiên bản chỉnh sửa (Version History) để biết bạn nào đã sửa nội dung gì và vào thời điểm nào.",
          "answer": true,
          "explain": "Đúng. Version History ghi nhận chi tiết lịch sử đóng góp của từng thành viên."
        }
      ]
    },
    {
      "id": "b6-tf2",
      "context": "Khi sử dụng tính năng chia sẻ tệp tin và phân quyền trên các dịch vụ lưu trữ đám mây (Google Drive, OneDrive):",
      "statements": [
        {
          "text": "a) Tùy chọn chia sẻ 'Bất kỳ ai có đường liên kết' kèm quyền 'Người chỉnh sửa' là cách chia sẻ an toàn nhất cho các tài liệu mật của trường học.",
          "answer": false,
          "explain": "Sai. Đây là cách chia sẻ cực kỳ nguy hiểm vì bất kỳ người lạ nào có link đều có thể vào phá hoại tài liệu."
        },
        {
          "text": "b) Chủ sở hữu (Owner) của tệp tin có quyền thay đổi hoặc hủy bỏ quyền truy cập của người khác bất cứ lúc nào.",
          "answer": true,
          "explain": "Đúng. Chủ sở hữu nắm toàn quyền quản trị quyền truy cập đối với tài sản số của mình."
        },
        {
          "text": "c) Khi chia sẻ với quyền 'Người xem' (Viewer), người nhận không thể tự ý thay đổi nội dung văn bản gốc trên tệp trực tuyến.",
          "answer": true,
          "explain": "Đúng. Quyền Viewer chỉ cho phép đọc, xem và tải về (nếu không bị chặn tải)."
        },
        {
          "text": "d) Dịch vụ lưu trữ trực tuyến bắt buộc máy tính của người dùng phải bật liên tục 24/24 giờ thì người khác mới tải được tệp chia sẻ.",
          "answer": false,
          "explain": "Sai. Tệp đã nằm trên máy chủ đám mây của nhà cung cấp nên người khác tải về độc lập mà không cần máy tính của người tải lên phải bật."
        }
      ]
    },
    {
      "id": "b6-tf3",
      "context": "Về cơ chế đồng bộ hóa và lưu trữ an toàn trên dịch vụ đám mây:",
      "statements": [
        {
          "text": "a) Tính năng đồng bộ hóa giúp các tệp tài liệu trong thư mục đồng bộ trên máy tính tự động cập nhật lên đám mây khi có Internet.",
          "answer": true,
          "explain": "Đúng. Đây là nguyên lý hoạt động của ứng dụng đồng bộ Drive/OneDrive."
        },
        {
          "text": "b) Khi xóa một tệp trên Google Drive, tệp sẽ được chuyển vào Thùng rác và lưu giữ trong 30 ngày trước khi bị xóa vĩnh viễn.",
          "answer": true,
          "explain": "Đúng. Cơ chế này giúp người dùng có cơ hội lấy lại tệp nếu xóa nhầm."
        },
        {
          "text": "c) Dung lượng lưu trữ miễn phí của Google Drive là không giới hạn, người dùng có thể tải lên hàng triệu Gigabyte phim ảnh.",
          "answer": false,
          "explain": "Sai. Tài khoản miễn phí giới hạn ở mức 15 GB dùng chung cho Drive, Gmail và Photos."
        },
        {
          "text": "d) Người dùng có thể bật chế độ truy cập ngoại tuyến (Offline) để xem và sửa một số tài liệu khi máy tính mất kết nối Internet.",
          "answer": true,
          "explain": "Đúng. Dữ liệu chỉnh sửa sẽ được đồng bộ bù khi thiết bị có mạng trở lại."
        }
      ]
    },
    {
      "id": "b6-tf4",
      "context": "Trong việc bảo mật dữ liệu lưu trữ trên Internet:",
      "statements": [
        {
          "text": "a) Kích hoạt xác thực 2 bước (2FA) cho tài khoản Google/Microsoft giúp ngăn chặn kẻ xấu đăng nhập ngay cả khi bị lộ mật khẩu.",
          "answer": true,
          "explain": "Đúng. 2FA đòi hỏi thêm mã OTP gửi về điện thoại, tăng cường an ninh tối đa."
        },
        {
          "text": "b) Đặt mật khẩu tài khoản đám mây trùng với ngày tháng năm sinh là phương pháp bảo mật tốt nhất được các chuyên gia khuyến nghị.",
          "answer": false,
          "explain": "Sai. Mật khẩu ngày sinh rất dễ bị đoán biết bằng các phương pháp tấn công phi kỹ thuật."
        },
        {
          "text": "c) Không nên bấm vào các liên kết chia sẻ tệp lạ từ những email nặc danh để phòng tránh bị lây nhiễm mã độc tống tiền.",
          "answer": true,
          "explain": "Đúng. Đây là quy tắc phòng ngừa tấn công Phishing qua tệp đính kèm/liên kết độc hại."
        },
        {
          "text": "d) Việc sao lưu ảnh và danh bạ lên đám mây giúp người dùng dễ dàng khôi phục lại dữ liệu khi đổi sang điện thoại mới.",
          "answer": true,
          "explain": "Đúng. Dữ liệu chỉ cần đăng nhập tài khoản là tự động đồng bộ sang máy mới."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b6-es1",
      "q": "Trình bày 3 ưu điểm vượt trội của dịch vụ lưu trữ trực tuyến (đám mây) so với thiết bị lưu trữ truyền thống (như USB, đĩa cứng di động).",
      "answer": "Ba ưu điểm vượt trội:\n1. Khả năng truy cập linh hoạt từ mọi nơi: Dữ liệu được lưu trữ trên máy chủ Internet, người dùng có thể mở và làm việc từ máy tính ở trường, điện thoại thông minh ở nhà hoặc máy tính bảng khi đi trên đường mà không cần mang theo thiết bị vật lý bên mình.\n2. Hỗ trợ làm việc nhóm và phân quyền cộng tác thời gian thực: Dễ dàng chia sẻ tệp cho nhiều người cùng lúc với các quyền kiểm soát chặt chẽ (Chỉ xem, Nhận xét, Chỉnh sửa); mọi người có thể đồng thời sửa đổi và thấy ngay thao tác của nhau.\n3. Tính an toàn và độ tin cậy dự phòng cao: Tránh được hoàn toàn các rủi ro vật lý thường gặp ở USB hay ổ cứng ngoài (như rơi vỡ hỏng mạch, ngấm nước, chập điện, để quên hoặc bị mất trộm); các nhà cung cấp đám mây lớn đều có hệ thống trung tâm dữ liệu sao lưu đa vùng tự động."
    },
    {
      "id": "b6-es2",
      "q": "Phân biệt sự khác nhau giữa ba quyền chia sẻ cơ bản trên Google Drive: 'Người xem' (Viewer), 'Người nhận xét' (Commenter) và 'Người chỉnh sửa' (Editor). Trong trường hợp nào thì nên dùng từng quyền?",
      "answer": "Phân biệt 3 quyền chia sẻ:\n1. Người xem (Viewer):\n- Đặc điểm: Chỉ có quyền đọc nội dung và tải tệp về (nếu không bị chặn), không thể thay đổi hay bình luận lên tài liệu.\n- Tình huống dùng: Khi phát tán tài liệu thông báo chung, đề thi, nội quy lớp học cho toàn thể học sinh hoặc phụ huynh xem mà không muốn ai can thiệp sửa đổi.\n\n2. Người nhận xét (Commenter):\n- Đặc điểm: Được phép đọc nội dung và tạo các hộp thoại bình luận, góp ý kiến, đề xuất chỉnh sửa bên lề mà không trực tiếp xóa hay ghi đè vào nội dung chính.\n- Tình huống dùng: Khi học sinh gửi bài dự thảo cho giáo viên chấm chữa, hoặc gửi bài làm cho bạn bè cùng tổ góp ý phản biện trước khi nộp.\n\n3. Người chỉnh sửa (Editor):\n- Đặc điểm: Có toàn quyền thêm, sửa, xóa nội dung, chèn hình ảnh và tổ chức lại tài liệu như chính tác giả.\n- Tình huống dùng: Dành cho các thành viên nòng cốt trong cùng một nhóm làm bài tập dự án, cùng nhau trực tiếp viết nội dung báo cáo."
    },
    {
      "id": "b6-es3",
      "q": "Nêu các nguy cơ mất an toàn thông tin khi lưu trữ dữ liệu trên đám mây và đề xuất 3 biện pháp bảo vệ tài khoản cá nhân.",
      "answer": "1. Các nguy cơ mất an toàn thông tin:\n- Nguy cơ lộ lọt dữ liệu do đặt mật khẩu yếu hoặc dùng chung một mật khẩu cho nhiều trang web khác nhau.\n- Bị tấn công lừa đảo (Phishing) đánh cắp thông tin tài khoản qua các trang web giả mạo.\n- Chia sẻ nhầm liên kết công khai kèm quyền Chỉnh sửa khiến kẻ lạ truy cập và phá hoại hoặc sao chép dữ liệu riêng tư.\n\n2. Ba biện pháp bảo vệ tài khoản:\n- Thiết lập mật khẩu mạnh và duy nhất: Dài từ 12 ký tự trở lên, gồm chữ hoa, chữ thường, số và ký tự đặc biệt; không chứa thông tin cá nhân dễ đoán.\n- Bật tính năng xác thực hai yếu tố (2FA): Sử dụng mã xác nhận gửi qua SMS, ứng dụng Google Authenticator hoặc khóa bảo mật phần cứng mỗi khi đăng nhập trên thiết bị lạ.\n- Kiểm soát chặt chẽ quyền chia sẻ: Luôn ưu tiên chia sẻ đích danh qua địa chỉ email, thường xuyên rà soát lại danh sách người được chia sẻ và lập tức thu hồi quyền đối với những người không còn tham gia dự án."
    },
    {
      "id": "b6-es4",
      "q": "Một bạn học sinh lưu trữ toàn bộ ảnh chụp gia đình và tài liệu ôn tập trên Google Drive miễn phí. Khi tài khoản báo dung lượng đạt 14.8/15 GB, bạn ấy nên thực hiện những thao tác gì để giải phóng dung lượng an toàn?",
      "answer": "Các bước giải phóng dung lượng an toàn:\n1. Sử dụng tính năng quản lý bộ nhớ của Google Drive để liệt kê các tệp theo thứ tự dung lượng từ lớn xuống nhỏ, xác định các tệp video nặng hoặc tệp sao lưu cũ không còn dùng để xóa bớt.\n2. Truy cập hòm thư Gmail, tìm kiếm và xóa các thư rác (Spam) hoặc các thư có tệp đính kèm dung lượng lớn bằng cú pháp 'has:attachment larger:10M'.\n3. Truy cập Google Photos, chuyển đổi chế độ lưu ảnh sang 'Tiết kiệm dung lượng' (Storage saver) hoặc xóa bớt các video clip quay hỏng.\n4. Mở mục 'Thùng rác' (Trash/Bin) trên cả Drive, Gmail và Photos, nhấp chọn 'Xóa sạch thùng rác' (Empty trash) để xóa vĩnh viễn các tệp đã xóa tạm, vì chỉ khi dọn thùng rác thì dung lượng mới thực sự được giải phóng."
    }
  ]
};

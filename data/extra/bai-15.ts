import { LessonExtra } from "@/lib/types";

// Bài 15: Bảo mật và an toàn hệ cơ sở dữ liệu (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b15-tf1",
      "context": "Trong việc bảo mật hệ thống cơ sở dữ liệu quản lý điểm của nhà trường:",
      "statements": [
        {
          "text": "a) Học sinh chỉ được cấp quyền xem (SELECT) điểm số của chính mình thông qua tài khoản cá nhân.",
          "answer": true,
          "explain": "Đúng. Đây là quyền hạn phù hợp theo nguyên tắc đặc quyền tối thiểu."
        },
        {
          "text": "b) Giáo viên bộ môn được cấp quyền chỉnh sửa (UPDATE) điểm của môn học mình phụ trách đối với các lớp được phân công dạy.",
          "answer": true,
          "explain": "Đúng. Giáo viên có quyền cập nhật dữ liệu chuyên môn trong phạm vi phụ trách."
        },
        {
          "text": "c) Mọi tài khoản trong trường (kể cả tài khoản học sinh) đều nên được cấp quyền quản trị tối cao (root/admin) để tiện sử dụng.",
          "answer": false,
          "explain": "Sai. Cấp quyền quản trị bừa bãi sẽ dẫn đến thảm họa phá hoại và thay đổi điểm bất hợp pháp."
        },
        {
          "text": "d) Lệnh GRANT trong SQL dùng để cấp quyền thao tác dữ liệu, còn lệnh REVOKE dùng để thu hồi quyền hạn.",
          "answer": true,
          "explain": "Đúng. Đây là cặp câu lệnh DCL chuẩn hóa quản trị phân quyền."
        }
      ]
    },
    {
      "id": "b15-tf2",
      "context": "Về các nguy cơ tấn công mạng và biện pháp phòng chống đối với cơ sở dữ liệu:",
      "statements": [
        {
          "text": "a) Tấn công SQL Injection xảy ra khi kẻ xấu lợi dụng sơ hở ở các ô nhập liệu web để chèn mã SQL độc hại nhằm chiếm quyền điều khiển dữ liệu.",
          "answer": true,
          "explain": "Đúng. SQL Injection là lỗ hổng an ninh web cực kỳ phổ biến và nguy hiểm."
        },
        {
          "text": "b) Kỹ thuật sử dụng câu lệnh có tham số hóa (Prepared Statements) là giải pháp hàng đầu để ngăn chặn tấn công SQL Injection.",
          "answer": true,
          "explain": "Đúng. Tham số hóa tách rời dữ liệu và câu lệnh, vô hiệu hóa mã chèn độc hại."
        },
        {
          "text": "c) Mật khẩu của người dùng nên được lưu trữ công khai dưới dạng văn bản thô (Plain text) trong CSDL để người quản trị dễ dàng cấp lại khi quên.",
          "answer": false,
          "explain": "Sai. Lưu mật khẩu thô vi phạm nghiêm trọng an toàn thông tin; bắt buộc phải băm một chiều (Hash) để bảo mật."
        },
        {
          "text": "d) Tường lửa CSDL (Database Firewall) giúp phát hiện và ngăn chặn các câu truy vấn SQL bất thường trước khi chúng đến được máy chủ CSDL.",
          "answer": true,
          "explain": "Đúng. Firewall lọc các luồng tấn công tầng ứng dụng hiệu quả."
        }
      ]
    },
    {
      "id": "b15-tf3",
      "context": "Về chính sách sao lưu (Backup) và phục hồi (Recovery) dữ liệu:",
      "statements": [
        {
          "text": "a) Định kỳ thực hiện sao lưu đầy đủ (Full Backup) dữ liệu là biện pháp cốt lõi để phòng ngừa mất mát dữ liệu do hỏng phần cứng hoặc thiên tai.",
          "answer": true,
          "explain": "Đúng. Sao lưu định kỳ là điều kiện tiên quyết đảm bảo tính liên tục của hệ thống."
        },
        {
          "text": "b) Bản sao lưu dữ liệu chỉ cần lưu duy nhất trên chính chiếc ổ cứng đang chứa cơ sở dữ liệu đó mà không cần sao chép đi đâu khác.",
          "answer": false,
          "explain": "Sai. Nếu ổ cứng đó bị cháy hỏng thì toàn bộ CSDL và bản sao lưu sẽ cùng mất sạch; bắt buộc phải lưu ra thiết bị rời hoặc đám mây."
        },
        {
          "text": "c) Các tệp sao lưu dữ liệu dự phòng cũng bắt buộc phải được mã hóa cẩn thận để tránh nguy cơ bị sao chép trộm.",
          "answer": true,
          "explain": "Đúng. Tệp sao lưu chứa nguyên vẹn kho dữ liệu mật nên phải được mã hóa bảo vệ."
        },
        {
          "text": "d) Tệp nhật ký hệ thống (Log file) ghi lại chi tiết các giao dịch theo mốc thời gian phục vụ cho quá trình phục hồi dữ liệu sau sự cố mất điện.",
          "answer": true,
          "explain": "Đúng. Log file cho phép phục hồi trạng thái chính xác đến từng giao dịch."
        }
      ]
    },
    {
      "id": "b15-tf4",
      "context": "Về các quy định pháp luật và ý thức công dân số đối với an toàn dữ liệu:",
      "statements": [
        {
          "text": "a) Tự ý xâm nhập trái phép vào cơ sở dữ liệu của nhà trường để thay đổi điểm số là hành vi vi phạm pháp luật hình sự.",
          "answer": true,
          "explain": "Đúng. Tội xâm nhập trái phép mạng máy tính và sửa đổi dữ liệu bị truy cứu trách nhiệm hình sự theo Bộ luật Hình sự."
        },
        {
          "text": "b) Sao chép và mua bán danh sách số điện thoại, thông tin cá nhân của học sinh và phụ huynh là hành vi bị nghiêm cấm theo quy định về bảo vệ dữ liệu cá nhân.",
          "answer": true,
          "explain": "Đúng. Nghị định về bảo vệ dữ liệu cá nhân xử phạt rất nặng hành vi mua bán dữ liệu trái phép."
        },
        {
          "text": "c) Mã hóa đường truyền SSL/TLS (HTTPS) giúp ngăn chặn kẻ xấu trên cùng mạng Wi-Fi nghe lén các thông tin đăng nhập CSDL.",
          "answer": true,
          "explain": "Đúng. Mã hóa đường truyền bảo vệ an toàn dữ liệu trên đường đi."
        },
        {
          "text": "d) Người quản trị CSDL được quyền tùy ý chia sẻ mật khẩu máy chủ cho bạn bè để nhờ quản lý hộ khi đi du lịch.",
          "answer": false,
          "explain": "Sai. Đây là hành vi thiếu trách nhiệm, vi phạm nghiêm trọng quy chế an toàn thông tin của tổ chức."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b15-es1",
      "q": "Phân biệt hai khái niệm cốt lõi trong an toàn cơ sở dữ liệu: 'Xác thực người dùng' (Authentication) và 'Phân quyền người dùng' (Authorization). Nêu ví dụ minh họa trong hệ thống quản lý học sinh.",
      "answer": "1. Khái niệm và phân biệt:\n- Xác thực người dùng (Authentication - Trả lời câu hỏi: 'Bạn là ai?'): Là quá trình hệ thống kiểm tra và xác minh danh tính thực sự của đối tượng đang yêu cầu truy cập thông qua các thông tin định danh như tên đăng nhập kết hợp mật khẩu, mã OTP xác thực qua điện thoại hoặc sinh trắc học vân tay/khuôn mặt.\n- Phân quyền người dùng (Authorization - Trả lời câu hỏi: 'Bạn được phép làm gì?'): Là quá trình hệ thống xác định phạm vi quyền hạn và các hành động cụ thể mà người dùng đó được phép thực thi (chỉ được xem, hay được thêm, sửa, xóa) trên từng bảng, từng cột hoặc từng chức năng phần mềm sau khi đã xác thực thành công.\n\n2. Ví dụ minh họa trong hệ thống quản lý học sinh:\n- Thầy giáo Nguyễn Văn An gõ tên đăng nhập 'nguyenvanan' và mật khẩu kèm mã OTP gửi về điện thoại. Hệ thống kiểm tra thấy chính xác và cho phép đăng nhập vào hệ thống -> Đây là bước XÁC THỰC (Authentication).\n- Sau khi vào hệ thống, thầy An là giáo viên dạy môn Toán lớp 11A1, hệ thống chỉ cho phép thầy nhập và sửa điểm ở cột 'Toán' của lớp 11A1; thầy không được phép sửa điểm môn Văn, không được sửa điểm các lớp khác, và cũng không có quyền xóa tài khoản của người dùng khác -> Đây là bước PHÂN QUYỀN (Authorization)."
    },
    {
      "id": "b15-es2",
      "q": "Tấn công 'SQL Injection' (Tiêm mã SQL) là gì? Trình bày cơ chế kẻ tấn công lợi dụng lỗ hổng này để vượt qua bước đăng nhập và nêu giải pháp phòng chống chuẩn mực.",
      "answer": "1. Khái niệm SQL Injection: Là một kỹ thuật tấn công mạng nguy hiểm trong đó tin tặc chèn (tiêm) các đoạn mã lệnh SQL độc hại vào các ô nhập liệu của ứng dụng web (như ô đăng nhập, thanh tìm kiếm). Do phần mềm không lọc kỹ dữ liệu đầu vào, câu lệnh SQL phía máy chủ bị biến đổi cấu trúc và thực thi các hành động bất hợp pháp do kẻ tấn công chỉ định.\n\n2. Cơ chế vượt qua bước đăng nhập (Bypass Login):\n- Giả sử câu lệnh kiểm tra đăng nhập trên máy chủ có dạng:\n  SELECT * FROM NGUOI_DUNG WHERE TenDangNhap = '$user' AND MatKhau = '$pass';\n- Kẻ tấn công nhập vào ô Tên đăng nhập chuỗi ký tự: ' OR '1'='1' --\n- Khi ghép chuỗi, câu lệnh SQL thực thi trên máy chủ trở thành:\n  SELECT * FROM NGUOI_DUNG WHERE TenDangNhap = '' OR '1'='1' -- AND MatKhau = '...';\n- Do biểu thức '1'='1' luôn luôn Đúng (TRUE) và ký hiệu hai dấu gạch ngang (--) biến phần kiểm tra mật khẩu phía sau thành chú thích bị bỏ qua, câu lệnh lập tức trả về kết quả đăng nhập thành công mà kẻ tấn công không hề cần biết mật khẩu.\n\n3. Giải pháp phòng chống chuẩn mực:\n- Sử dụng câu lệnh có tham số hóa (Prepared Statements / Parameterized Queries): Tách biệt hoàn toàn phần mã lệnh SQL tĩnh và phần dữ liệu tham số do người dùng nhập vào. Trình biên dịch SQL sẽ coi dữ liệu người dùng chỉ là một chuỗi ký tự đơn thuần, loại bỏ hoàn toàn khả năng biến đổi cấu trúc câu lệnh.\n- Kiểm tra và thanh lọc dữ liệu đầu vào (Input Validation & Sanitization): Giới hạn độ dài, loại bỏ các ký tự đặc biệt nguy hiểm trước khi xử lý."
    },
    {
      "id": "b15-es3",
      "q": "Trình bày các giải pháp kỹ thuật cần thiết để đảm bảo an toàn và bảo mật cho một hệ thống cơ sở dữ liệu trường học trước nguy cơ bị mất mát dữ liệu do sự cố phần cứng hoặc mã độc tống tiền (Ransomware).",
      "answer": "Các giải pháp kỹ thuật bảo vệ toàn diện:\n1. Thực hiện chiến lược Sao lưu dữ liệu dự phòng (Backup) theo quy tắc 3-2-1:\n- Duy trì ít nhất 3 bản sao lưu dữ liệu.\n- Lưu trữ trên 2 loại thiết bị lưu trữ khác nhau (ví dụ: ổ cứng máy chủ và ổ cứng di động rời).\n- Giữ ít nhất 1 bản sao lưu tại một vị trí địa lý độc lập hoàn toàn (ví dụ: trên dịch vụ đám mây Google Cloud / AWS, hoặc ổ cứng ngắt kết nối mạng hoàn toàn - Offline/Air-gapped Backup) để phòng ngừa mã độc Ransomware lây lan qua mạng nội bộ tự động mã hóa cả bản sao lưu.\n\n2. Phân quyền chặt chẽ theo nguyên tắc đặc quyền tối thiểu (Least Privilege):\n- Giới hạn quyền quản trị tối cao (admin), chỉ cấp đúng quyền hạn tối thiểu cho từng giáo viên và nhân viên.\n- Bắt buộc đổi mật khẩu định kỳ và kích hoạt xác thực hai yếu tố (2FA) cho tất cả các tài khoản quản trị.\n\n3. Mã hóa dữ liệu (Encryption):\n- Mã hóa dữ liệu lưu trữ tĩnh trên đĩa cứng (Transparent Data Encryption - TDE) để kẻ xấu có lấy trộm ổ cứng cũng không đọc được.\n- Mã hóa đường truyền bằng giao thức HTTPS/SSL để chống nghe lén thông tin qua mạng.\n\n4. Cài đặt phần mềm bảo vệ và cập nhật hệ thống định kỳ:\n- Cài đặt hệ thống tường lửa (Firewall) và phần mềm diệt virus/mã độc doanh nghiệp có khả năng giám sát hành vi bất thường theo thời gian thực.\n- Thường xuyên cập nhật các bản vá lỗi bảo mật mới nhất cho Hệ điều hành máy chủ và Hệ quản trị CSDL."
    },
    {
      "id": "b15-es4",
      "q": "Giả sử em là người quản trị cơ sở dữ liệu (DBA) của nhà trường, hãy viết các câu lệnh SQL để:\na) Cấp quyền chỉ xem (SELECT) trên bảng HOC_SINH cho tài khoản người dùng 'hocsinh_xem'.\nb) Thu hồi quyền xóa (DELETE) trên bảng DIEM đối với tài khoản người dùng 'giao_vien'.",
      "answer": "Các câu lệnh SQL quản trị phân quyền (DCL):\n\na) Cấp quyền chỉ xem (SELECT) trên bảng HOC_SINH cho tài khoản 'hocsinh_xem':\nGRANT SELECT ON HOC_SINH TO 'hocsinh_xem';\n\nb) Thu hồi quyền xóa (DELETE) trên bảng DIEM đối với tài khoản 'giao_vien':\nREVOKE DELETE ON DIEM FROM 'giao_vien';"
    }
  ]
};

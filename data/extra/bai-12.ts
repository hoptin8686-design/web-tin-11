import { LessonExtra } from "@/lib/types";

// Bài 12: Hệ quản trị cơ sở dữ liệu và hệ cơ sở dữ liệu (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b12-tf1",
      "context": "Trong buổi học lý thuyết Tin học 11 về kiến trúc hệ thống dữ liệu, nhóm học sinh thảo luận về mối quan hệ giữa CSDL, Hệ quản trị CSDL (DBMS) và Hệ CSDL:",
      "statements": [
        {
          "text": "a) Hệ quản trị CSDL (DBMS) là phần mềm trung gian giúp người dùng và phần mềm ứng dụng tương tác với cơ sở dữ liệu vật lý.",
          "answer": true,
          "explain": "Đúng. Đây là định nghĩa và vị trí chức năng của DBMS trong hệ thống."
        },
        {
          "text": "b) Hệ CSDL (Database System) là khái niệm rộng hơn, bao gồm cả phần cứng, CSDL, DBMS, các phần mềm ứng dụng và con người vận hành.",
          "answer": true,
          "explain": "Đúng. Hệ CSDL là một hệ thống hoàn chỉnh kết hợp cả dữ liệu, công cụ phần mềm và con người."
        },
        {
          "text": "c) MySQL và Oracle là tên của các loại vi xử lý CPU máy tính chứ không phải phần mềm quản trị CSDL.",
          "answer": false,
          "explain": "Sai. MySQL và Oracle là các hệ quản trị cơ sở dữ liệu nổi tiếng toàn cầu."
        },
        {
          "text": "d) Người dùng cuối (End-user) bắt buộc phải học thuộc lòng toàn bộ cú pháp các câu lệnh SQL thì mới có thể sử dụng được phần mềm quản lý bán hàng.",
          "answer": false,
          "explain": "Sai. Người dùng cuối chỉ thao tác với giao diện đồ họa trực quan (nhấn nút, điền ô), câu lệnh SQL do phần mềm tự động tạo ngầm bên dưới."
        }
      ]
    },
    {
      "id": "b12-tf2",
      "context": "Về kiến trúc 3 mức chuẩn của hệ cơ sở dữ liệu (ANSI/SPARC):",
      "statements": [
        {
          "text": "a) Mức trong (mức vật lý) mô tả cách thức dữ liệu được sắp xếp và lưu trữ thực tế trên các cung từ của đĩa cứng.",
          "answer": true,
          "explain": "Đúng. Mức trong là tầng lưu trữ vật lý nhị phân thấp nhất."
        },
        {
          "text": "b) Mức quan niệm (mức logic) mô tả toàn bộ cấu trúc các bảng, các mối quan hệ liên kết và ràng buộc toàn vẹn của CSDL.",
          "answer": true,
          "explain": "Đúng. Mức quan niệm là cái nhìn logic toàn diện của người thiết kế CSDL."
        },
        {
          "text": "c) Mức ngoài (Khung nhìn - View) cho phép ẩn đi các trường dữ liệu mật và chỉ hiển thị phần dữ liệu phù hợp với quyền hạn của từng người dùng.",
          "answer": true,
          "explain": "Đúng. View tạo ra các giao diện nhìn an toàn cho từng nhóm đối tượng."
        },
        {
          "text": "d) Kiến trúc 3 mức này hoàn toàn không có tác dụng gì trong việc duy trì tính độc lập của dữ liệu.",
          "answer": false,
          "explain": "Sai. Chính việc tách rời 3 tầng kiến trúc là cơ chế nền tảng tạo nên tính độc lập vật lý và độc lập logic cho dữ liệu."
        }
      ]
    },
    {
      "id": "b12-tf3",
      "context": "Về các vai trò con người trong một hệ cơ sở dữ liệu:",
      "statements": [
        {
          "text": "a) Người quản trị CSDL (DBA) là người nắm toàn quyền kỹ thuật cao nhất, quyết định cấu trúc, phân quyền bảo mật và thực hiện sao lưu định kỳ.",
          "answer": true,
          "explain": "Đúng. DBA chịu trách nhiệm về tính toàn vẹn, bảo mật và sự sống còn của hệ thống dữ liệu."
        },
        {
          "text": "b) Người lập trình ứng dụng viết mã lệnh (Python, Java, PHP) kết nối với DBMS để xây dựng các tiện ích phục vụ người dùng cuối.",
          "answer": true,
          "explain": "Đúng. Lập trình viên xây dựng phần mềm ứng dụng trung gian."
        },
        {
          "text": "c) Nhân viên thu ngân trong siêu thị khi quét mã vạch tính tiền được xếp vào nhóm 'Người quản trị cơ sở dữ liệu'.",
          "answer": false,
          "explain": "Sai. Nhân viên thu ngân là Người dùng cuối (End-user), chỉ khai thác phần mềm chứ không quản trị hệ thống CSDL."
        },
        {
          "text": "d) Học sinh tra cứu điểm thi trên trang web trường học là đối tượng người dùng cuối.",
          "answer": true,
          "explain": "Đúng. Học sinh là người thụ hưởng thông tin thông qua giao diện tra cứu web."
        }
      ]
    },
    {
      "id": "b12-tf4",
      "context": "Về các chức năng kiểm soát và an toàn của Hệ quản trị cơ sở dữ liệu (DBMS):",
      "statements": [
        {
          "text": "a) DBMS cung cấp tệp nhật ký (Log file) để có thể phục hồi dữ liệu về trạng thái chính xác sau sự cố mất điện đột ngột.",
          "answer": true,
          "explain": "Đúng. Tệp Log ghi nhận lịch sử giao dịch phục vụ việc Rollback / Redo khi phục hồi."
        },
        {
          "text": "b) Cơ chế kiểm soát truy cập đồng thời của DBMS giúp ngăn ngừa hiện tượng mất mát dữ liệu khi nhiều người cùng đặt vé máy bay cùng lúc.",
          "answer": true,
          "explain": "Đúng. Khóa dữ liệu ngăn chặn việc hai người cùng mua trùng một ghế."
        },
        {
          "text": "c) Tất cả các hệ quản trị CSDL đều có dung lượng tối đa cố định là 10 MB và không thể lưu thêm dữ liệu.",
          "answer": false,
          "explain": "Sai. Các RDBMS lớn có thể quản lý kho dữ liệu hàng trăm Terabyte đến Petabyte."
        },
        {
          "text": "d) Hệ quản trị CSDL cho phép phân quyền chi tiết: tài khoản nào chỉ được xem, tài khoản nào được phép sửa xóa dữ liệu.",
          "answer": true,
          "explain": "Đúng. Phân quyền người dùng (Authorization) là chức năng an ninh cốt lõi của DBMS."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b12-es1",
      "q": "Phân biệt sự khác nhau giữa các khái niệm: Cơ sở dữ liệu (CSDL), Hệ quản trị cơ sở dữ liệu (DBMS) và Hệ cơ sở dữ liệu (Database System). Cho ví dụ thực tế minh họa.",
      "answer": "1. Phân biệt các khái niệm:\n- Cơ sở dữ liệu (CSDL): Là bản thân kho dữ liệu có cấu trúc được lưu trữ trên thiết bị nhớ (phần 'hồn' dữ liệu).\n- Hệ quản trị CSDL (DBMS): Là bộ phần mềm hệ thống cung cấp các công cụ và môi trường để con người tạo lập, quản trị, cập nhật và khai thác CSDL đó.\n- Hệ cơ sở dữ liệu (Database System): Là một hệ sinh thái tổng thể hoàn chỉnh, bao gồm 5 thành phần: Phần cứng + CSDL + DBMS + Phần mềm ứng dụng + Con người (người quản trị, lập trình viên, người dùng cuối).\n\n2. Ví dụ thực tế trong quản lý trường THPT:\n- CSDL: Toàn bộ dữ liệu điểm số, thông tin cá nhân của 1000 học sinh được lưu trữ trong các bảng trên máy chủ.\n- DBMS: Phần mềm hệ quản trị cơ sở dữ liệu MySQL đang chạy ngầm trên máy chủ để điều khiển kho dữ liệu đó.\n- Phần mềm ứng dụng: Trang web 'vnEdu' hoặc 'Sổ liên lạc điện tử' có giao diện thân thiện cho giáo viên nhập điểm và phụ huynh xem điểm.\n- Hệ CSDL: Tổng hòa gồm máy chủ trường học (phần cứng) + kho dữ liệu học sinh (CSDL) + phần mềm MySQL (DBMS) + web tra cứu điểm (phần mềm ứng dụng) + giáo viên, cán bộ quản trị và phụ huynh học sinh (con người)."
    },
    {
      "id": "b12-es2",
      "q": "Trình bày kiến trúc 3 mức của hệ cơ sở dữ liệu (ANSI/SPARC) và phân tích ý nghĩa của kiến trúc này đối với tính độc lập dữ liệu.",
      "answer": "1. Kiến trúc 3 mức của hệ CSDL:\n- Mức trong (Internal Level / Mức vật lý): Mức thấp nhất, mô tả cách thức dữ liệu thực sự được lưu trữ trên các thiết bị nhớ vật lý (cấu trúc tệp, chỉ mục index, khối lưu trữ trên đĩa).\n- Mức quan niệm (Conceptual Level / Mức logic): Mức trung gian, mô tả toàn thể cấu trúc logic của toàn bộ CSDL (các bảng, các trường, kiểu dữ liệu, các ràng buộc và mối liên kết giữa các bảng) theo góc nhìn của người thiết kế, không phụ thuộc vào thiết bị lưu trữ vật lý cụ thể.\n- Mức ngoài (External Level / Khung nhìn - View): Mức cao nhất, gồm nhiều khung nhìn dữ liệu riêng biệt được thiết kế riêng cho từng nhóm người dùng khác nhau; mỗi nhóm chỉ nhìn thấy phần dữ liệu mà họ có quyền hạn khai thác.\n\n2. Ý nghĩa đối với tính độc lập dữ liệu:\n- Độc lập vật lý: Được đảm bảo giữa Mức trong và Mức quan niệm. Khi ta thay đổi cấu trúc lưu trữ đĩa cứng (như đổi loại ổ đĩa, tối ưu chỉ mục) thì chỉ cần thay đổi ánh xạ trong-quan niệm mà không làm thay đổi cấu trúc bảng ở mức quan niệm hay phần mềm ứng dụng.\n- Độc lập logic: Được đảm bảo giữa Mức quan niệm và Mức ngoài. Khi ta mở rộng CSDL ở mức quan niệm (thêm bảng mới, thêm cột mới) thì các khung nhìn mức ngoài cũ không thay đổi, các ứng dụng cũ vẫn hoạt động trơn tru không bị lỗi."
    },
    {
      "id": "b12-es3",
      "q": "Nêu 3 nhóm đối tượng người dùng trong một hệ cơ sở dữ liệu. Phân tích nhiệm vụ và quyền hạn của Người quản trị cơ sở dữ liệu (DBA).",
      "answer": "1. Ba nhóm đối tượng người dùng:\n- Người quản trị cơ sở dữ liệu (DBA - Database Administrator).\n- Người lập trình ứng dụng (Application Programmer).\n- Người dùng cuối (End-user).\n\n2. Nhiệm vụ và quyền hạn của Người quản trị CSDL (DBA):\n- Thiết kế và cài đặt CSDL: Tham gia xây dựng cấu trúc bảng logic và cấu hình vật lý cho hệ thống CSDL ban đầu.\n- Quản lý bảo mật và phân quyền: Cấp phát tài khoản, mật khẩu và xác lập quyền hạn chi tiết (đọc, ghi, sửa, xóa) cho từng nhân viên, đảm bảo nguyên tắc bảo mật thông tin tối thiểu cần thiết.\n- Giám sát và tối ưu hóa hiệu năng: Theo dõi tốc độ phản hồi của hệ thống, thiết lập chỉ mục (Index) và tinh chỉnh cấu hình máy chủ để hệ thống chạy nhanh nhất khi có nhiều người truy cập cùng lúc.\n- Sao lưu và phục hồi thảm họa: Lên lịch sao lưu dự phòng dữ liệu tự động hàng ngày/hàng tuần và trực tiếp chịu trách nhiệm phục hồi nguyên vẹn hệ thống dữ liệu khi xảy ra sự cố cháy nổ, hỏng ổ cứng hoặc bị tin tặc tấn công."
    },
    {
      "id": "b12-es4",
      "q": "Cơ chế 'Khung nhìn' (View) trong hệ quản trị cơ sở dữ liệu là gì? Nêu một ví dụ thực tế cho thấy cơ chế này giúp bảo vệ bí mật thông tin trong nhà trường.",
      "answer": "1. Khái niệm Khung nhìn (View): Là một 'bảng ảo' trong CSDL được định nghĩa từ một câu truy vấn dữ liệu (SELECT) từ một hoặc nhiều bảng thật. Khung nhìn không trực tiếp lưu trữ dữ liệu riêng biệt mà chỉ trích xuất động các cột và dòng dữ liệu được chỉ định sẵn mỗi khi có yêu cầu.\n\n2. Ví dụ thực tế bảo vệ bí mật thông tin trong nhà trường:\n- Giả sử bảng thật HỌC_SINH chứa các thông tin: (Mã học sinh, Họ tên, Ngày sinh, Giới tính, Điểm số, Hoàn cảnh gia đình, Tình trạng sức khỏe, Hồ sơ kỷ luật, Số tài khoản ngân hàng của cha mẹ).\n- Khi xây dựng tính năng xem danh sách lớp cho học sinh: Người quản trị không cấp quyền truy cập trực tiếp vào bảng thật, mà tạo một Khung nhìn tên là V_DANHSACH_LOP chỉ gồm 3 cột: (Mã học sinh, Họ tên, Ngày sinh).\n- Tác dụng bảo vệ thông tin: Học sinh và người ngoài khi truy cập phần mềm chỉ nhìn thấy bảng ảo V_DANHSACH_LOP, hoàn toàn không thể xem được các thông tin nhạy cảm về hoàn cảnh khó khăn, kỷ luật hay số tài khoản ngân hàng của gia đình bạn bè, đảm bảo tính nhân văn và quyền riêng tư theo pháp luật."
    }
  ]
};

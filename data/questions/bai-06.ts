import { Question } from "@/lib/types";

// Bài 6: Lưu trữ và chia sẻ tệp tin trên Internet
export const questions: Question[] = [
  {
    "id": "b6-01",
    "q": "Dịch vụ lưu trữ trực tuyến (Cloud Storage) mang lại lợi ích nổi bật nào?",
    "options": [
      "Lưu trữ dữ liệu an toàn trên Internet, truy cập từ mọi thiết bị và dễ dàng phân quyền chia sẻ",
      "Tự động tăng dung lượng thanh nhớ RAM vật lý của máy tính",
      "Giúp máy tính không bao giờ bị mất nguồn điện",
      "Tự động giải bài tập về nhà cho học sinh"
    ],
    "answer": 0,
    "explain": "Lưu trữ đám mây cho phép lưu tệp trên máy chủ từ xa, truy cập qua mạng từ máy tính/điện thoại và chia sẻ linh hoạt."
  },
  {
    "id": "b6-02",
    "q": "Dịch vụ nào sau đây là dịch vụ lưu trữ đám mây phổ biến hiện nay?",
    "options": [
      "Google Drive, Microsoft OneDrive, Dropbox",
      "Adobe Photoshop, Corel Draw, AutoCAD",
      "VLC Media Player, Windows Media Player",
      "Notepad, Calculator, Paint"
    ],
    "answer": 0,
    "explain": "Google Drive, OneDrive, Dropbox, iCloud là các dịch vụ lưu trữ và đồng bộ hóa tệp tin trực tuyến hàng đầu thế giới."
  },
  {
    "id": "b6-03",
    "q": "Khi chia sẻ một tệp trên Google Drive, tùy chọn quyền nào cho phép người nhận đọc tài liệu và thêm các ghi chú góp ý mà không thể sửa trực tiếp nội dung gốc?",
    "options": [
      "Người nhận xét (Commenter)",
      "Người xem (Viewer)",
      "Người chỉnh sửa (Editor)",
      "Chủ sở hữu (Owner)"
    ],
    "answer": 0,
    "explain": "Quyền Commenter cho phép đọc và để lại lời bình luận/nhận xét bên lề tài liệu nhưng không có quyền xóa hay viết đè lên nội dung gốc."
  },
  {
    "id": "b6-04",
    "q": "Tùy chọn quyền nào khi chia sẻ tệp cho phép người nhận có toàn quyền sửa đổi, xóa và tải tệp lên?",
    "options": [
      "Người chỉnh sửa (Editor)",
      "Người xem (Viewer)",
      "Người nhận xét (Commenter)",
      "Khách vãng lai"
    ],
    "answer": 0,
    "explain": "Quyền Editor cấp quyền can thiệp nội dung, thêm sửa xóa dữ liệu và phối hợp cùng làm việc."
  },
  {
    "id": "b6-05",
    "q": "Tính năng đồng bộ hóa (Sync) của ứng dụng Google Drive trên máy tính hoạt động theo cơ chế nào?",
    "options": [
      "Tự động cập nhật các thay đổi của tệp trong thư mục máy tính lên đám mây và ngược lại khi có kết nối Internet",
      "Xóa toàn bộ tệp tin trên máy tính để tiết kiệm dung lượng ổ cứng",
      "Gửi toàn bộ tệp tin lên trang chủ mạng xã hội công khai",
      "Nén toàn bộ tệp tin thành định dạng hình ảnh đen trắng"
    ],
    "answer": 0,
    "explain": "Đồng bộ hóa giữ cho dữ liệu trên thư mục máy tính và trên máy chủ đám mây luôn giống hệt nhau một cách tự động."
  },
  {
    "id": "b6-06",
    "q": "Khi chia sẻ tệp tin bằng đường liên kết (link), tùy chọn 'Bất kỳ ai có đường liên kết' (Anyone with the link) có đặc điểm gì?",
    "options": [
      "Bất kỳ ai nhận được đường liên kết đều có thể truy cập mà không cần phải có tài khoản được cấp quyền trước",
      "Chỉ duy nhất người tạo liên kết mới xem được",
      "Chỉ những người dùng cùng mạng Wi-Fi mới mở được",
      "Chỉ mở được vào ban đêm sau 22 giờ"
    ],
    "answer": 0,
    "explain": "Tùy chọn này mở quyền công khai cho bất cứ ai có link, phù hợp cho tài liệu đại chúng nhưng rủi ro với dữ liệu riêng tư."
  },
  {
    "id": "b6-07",
    "q": "Để đảm bảo an toàn cho tài liệu mật hoặc nhạy cảm của gia đình, em NÊN chọn chế độ chia sẻ nào trên Google Drive?",
    "options": [
      "Chỉ chia sẻ đích danh qua địa chỉ email của người nhận và cấp đúng quyền tối thiểu cần thiết",
      "Bật chế độ công khai cho bất kỳ ai có đường liên kết đều có quyền Chỉnh sửa",
      "Đăng liên kết tải tệp lên các diễn đàn mạng công cộng",
      "Gửi đường liên kết vào các nhóm chát lạ trên mạng"
    ],
    "answer": 0,
    "explain": "Chia sẻ đích danh qua email hạn chế người ngoài truy cập và có thể thu hồi quyền bất kỳ lúc nào."
  },
  {
    "id": "b6-08",
    "q": "Thao tác nào sau đây giúp giải phóng dung lượng lưu trữ trên Google Drive khi tài khoản sắp bị đầy?",
    "options": [
      "Kiểm tra và xóa vĩnh viễn các tệp video, tệp nén dung lượng lớn trong Thùng rác (Trash) của Drive",
      "Đổi tên tài khoản Google sang tên khác",
      "Tắt màn hình máy tính trong 3 ngày",
      "Chuyển ngôn ngữ giao diện sang tiếng Anh"
    ],
    "answer": 0,
    "explain": "Tệp trong Thùng rác của Google Drive vẫn chiếm dung lượng cho đến khi được xóa vĩnh viễn (Empty trash)."
  },
  {
    "id": "b6-09",
    "q": "Một ưu điểm lớn của lưu trữ đám mây khi làm việc nhóm là:",
    "options": [
      "Quản lý lịch sử phiên bản (Version History) cho phép xem lại hoặc khôi phục nội dung cũ khi ai đó sửa nhầm",
      "Tự động viết xong báo cáo mà không cần con người can thiệp",
      "Tự động tăng điểm kiểm tra môn Tin học lên 10 điểm",
      "Ngăn cấm hoàn toàn mọi người cùng xem tệp"
    ],
    "answer": 0,
    "explain": "Lịch sử phiên bản lưu lại từng bản sửa đổi theo mốc thời gian và người sửa, dễ dàng đảo ngược thao tác nhầm lẫn."
  },
  {
    "id": "b6-10",
    "q": "Để tải cả một thư mục gồm nhiều bài học từ máy tính lên Google Drive, em chọn nút nào trên giao diện Drive?",
    "options": [
      "Mới (New) -> Tải thư mục lên (Folder upload)",
      "Mới (New) -> Tạo tài liệu mới",
      "Cài đặt -> Đổi mật khẩu",
      "Chia sẻ với tôi -> Xóa tệp"
    ],
    "answer": 0,
    "explain": "Lựa chọn 'Folder upload' giúp tải nguyên vẹn cấu trúc cả thư mục con và các tệp bên trong lên Drive."
  },
  {
    "id": "b6-11",
    "q": "Khi một tệp tin trên Google Drive bị xóa nhầm, tệp đó sẽ nằm trong thư mục nào trước khi bị xóa vĩnh viễn?",
    "options": [
      "Thùng rác (Trash / Bin)",
      "Được chia sẻ với tôi (Shared with me)",
      "Có gắn dấu sao (Starred)",
      "Bộ nhớ dùng chung (Shared Drives)"
    ],
    "answer": 0,
    "explain": "Thùng rác (Trash) giữ tệp bị xóa trong 30 ngày cho phép người dùng khôi phục lại khi cần thiết."
  },
  {
    "id": "b6-12",
    "q": "Ứng dụng OneDrive được tích hợp sâu sẵn trong hệ điều hành nào sau đây?",
    "options": [
      "Windows 10 và Windows 11",
      "Ubuntu Linux",
      "macOS Monterey",
      "Android 12"
    ],
    "answer": 0,
    "explain": "OneDrive là dịch vụ đám mây của Microsoft được tích hợp mặc định trong File Explorer của Windows."
  },
  {
    "id": "b6-13",
    "q": "Hạn chế nào sau đây là của dịch vụ lưu trữ trực tuyến?",
    "options": [
      "Cần phải có đường truyền Internet để tải và đồng bộ tệp tin",
      "Không thể lưu trữ được các tệp văn bản",
      "Chỉ người trên 50 tuổi mới được phép tạo tài khoản",
      "Tốc độ gõ phím của máy tính bị chậm đi một nửa"
    ],
    "answer": 0,
    "explain": "Không có mạng Internet thì không thể tải tệp mới lên hoặc đồng bộ dữ liệu với đám mây."
  },
  {
    "id": "b6-14",
    "q": "Tính năng 'Làm việc ngoại tuyến' (Offline access) của Google Drive hỗ trợ điều gì?",
    "options": [
      "Cho phép xem và chỉnh sửa một số tệp tài liệu đã chọn ngay cả khi không có kết nối Internet",
      "Tự động kết nối máy tính với vệ tinh ngoài vũ trụ",
      "Tự động sạc pin cho máy tính từ xa",
      "Biến ổ cứng HDD thành ổ SSD tốc độ cao"
    ],
    "answer": 0,
    "explain": "Khi bật chế độ Offline, các tệp được lưu đệm trên máy tính để sửa đổi và sẽ tự đồng bộ lên mạng khi có Internet trở lại."
  },
  {
    "id": "b6-15",
    "q": "Khi chia sẻ tài liệu cho thầy giáo chấm bài, em nên chọn quyền nào là phù hợp nhất?",
    "options": [
      "Người nhận xét (Commenter) hoặc Người chỉnh sửa (Editor)",
      "Khóa không cho thầy giáo xem",
      "Xóa vĩnh viễn tài liệu",
      "Đặt mật khẩu bí mật và không gửi cho thầy"
    ],
    "answer": 0,
    "explain": "Quyền Commenter/Editor giúp thầy cô có thể ghi chú nhận xét, sửa lỗi trực tiếp trên bài làm của học sinh."
  },
  {
    "id": "b6-16",
    "q": "Mục 'Được chia sẻ với tôi' (Shared with me) trên Google Drive chứa những tệp nào?",
    "options": [
      "Những tệp và thư mục do người khác chia sẻ cho tài khoản của em",
      "Tất cả các bài hát có trên mạng xã hội",
      "Những tệp mà em đã xóa vĩnh viễn khỏi máy tính",
      "Các tệp cài đặt của hệ điều hành Windows"
    ],
    "answer": 0,
    "explain": "Mục này liệt kê danh sách tài nguyên số mà bạn bè, thầy cô chia sẻ tới tài khoản Google của bạn."
  },
  {
    "id": "b6-17",
    "q": "Để tìm kiếm nhanh một tệp văn bản trong hàng ngàn tệp trên Google Drive, người dùng nên:",
    "options": [
      "Sử dụng thanh tìm kiếm phía trên cùng kết hợp bộ lọc loại tệp (Type), người sở hữu (Owner) hoặc ngày sửa đổi",
      "Mở từng thư mục một để đọc tên từng tệp bằng mắt",
      "Xóa hết tất cả các thư mục để tìm cho dễ",
      "Tải toàn bộ dữ liệu về một chiếc đĩa mềm"
    ],
    "answer": 0,
    "explain": "Thanh tìm kiếm của Google Drive hỗ trợ lọc thông minh theo tên, từ khóa bên trong văn bản và loại định dạng tệp."
  },
  {
    "id": "b6-18",
    "q": "Dung lượng miễn phí mặc định ban đầu của một tài khoản Google Drive cá nhân là bao nhiêu?",
    "options": [
      "15 GB",
      "5 GB",
      "100 GB",
      "1 TB"
    ],
    "answer": 0,
    "explain": "Google cấp miễn phí 15 GB dung lượng dùng chung cho Gmail, Google Drive và Google Photos của mỗi tài khoản cá nhân."
  },
  {
    "id": "b6-19",
    "q": "Tại sao người dùng KHÔNG NÊN đặt quyền 'Chỉnh sửa' (Editor) công khai cho bất kỳ ai có đường link đối với tài liệu quan trọng?",
    "options": [
      "Vì bất kỳ kẻ xấu nào có được liên kết đều có thể xóa sạch hoặc viết bậy làm hỏng toàn bộ tài liệu",
      "Vì làm như vậy sẽ khiến máy tính bị cháy nguồn điện",
      "Vì Google sẽ phạt tiền người tạo tài liệu",
      "Vì tài liệu sẽ tự động biến mất sau 10 giây"
    ],
    "answer": 0,
    "explain": "Quyền Editor công khai cho phép người nặc danh phá hoại nội dung mà khó xác định chính xác danh tính người sửa."
  },
  {
    "id": "b6-20",
    "q": "Chức năng 'Gắn dấu sao' (Star / Add to starred) trên Google Drive có tác dụng gì?",
    "options": [
      "Đánh dấu các tệp/thư mục quan trọng để truy cập nhanh chóng trong mục Có gắn dấu sao",
      "Chấm điểm 5 sao cho chất lượng của tệp tin",
      "Chia sẻ tệp cho các nhà thiên văn học",
      "Tự động dịch tệp sang tiếng nước ngoài"
    ],
    "answer": 0,
    "explain": "Gắn dấu sao tương tự như tạo Bookmark giúp gom các tài liệu hay dùng vào một mục riêng để không mất công tìm kiếm."
  },
  {
    "id": "b6-21",
    "q": "Khi một thành viên trong nhóm rời khỏi dự án, người sở hữu tệp (Owner) có thể làm gì?",
    "options": [
      "Xóa bỏ quyền truy cập của người đó đối với tệp tin dự án",
      "Tắt nguồn máy tính của người đó từ xa",
      "Xóa tài khoản mạng xã hội của người đó",
      "Không thể can thiệp được gì"
    ],
    "answer": 0,
    "explain": "Chủ sở hữu có toàn quyền thu hồi quyền xem, nhận xét hoặc chỉnh sửa của bất kỳ thành viên nào bất cứ lúc nào."
  },
  {
    "id": "b6-22",
    "q": "Hành vi nào sau đây là vi phạm văn hóa và đạo đức khi sử dụng dịch vụ lưu trữ chia sẻ tệp?",
    "options": [
      "Tải lên và chia sẻ các tệp tin chứa mã độc, nội dung đồi trụy hoặc tệp vi phạm bản quyền thương mại",
      "Tải bài giảng của thầy cô về để ôn thi",
      "Tạo thư mục riêng để lưu ảnh kỷ niệm gia đình",
      "Gửi lời cảm ơn bạn bè trong phần nhận xét của tài liệu"
    ],
    "answer": 0,
    "explain": "Phát tán mã độc hoặc dữ liệu vi phạm bản quyền/thuần phong mỹ tục vi phạm điều khoản sử dụng và pháp luật an ninh mạng."
  },
  {
    "id": "b6-23",
    "q": "Khi nhận được đường link chia sẻ tệp từ một người lạ gửi qua email với lời mời chào hấp dẫn, em nên làm gì?",
    "options": [
      "Thận trọng không bấm mở liên kết lạ, quét virus hoặc báo cáo thư rác lừa đảo",
      "Bấm ngay lập tức và tải tất cả tệp về cài đặt",
      "Chia sẻ liên kết đó cho toàn bộ học sinh trong trường",
      "Cung cấp mật khẩu tài khoản ngân hàng để xem tệp"
    ],
    "answer": 0,
    "explain": "Liên kết lạ từ kẻ giả mạo thường dẫn tới trang web giả mạo (phishing) hoặc tệp nén chứa mã độc nhằm chiếm quyền điều khiển máy tính."
  },
  {
    "id": "b6-24",
    "q": "Lợi ích của việc sao lưu dữ liệu ảnh điện thoại lên đám mây (Google Photos / iCloud) là gì?",
    "options": [
      "Bảo vệ ảnh kỷ niệm an toàn khi điện thoại bị hỏng hoặc mất trộm, đồng thời giải phóng bộ nhớ cho máy",
      "Làm cho camera của điện thoại chụp nét hơn gấp mười lần",
      "Giúp pin điện thoại dùng được liên tục một tháng không cần sạc",
      "Tự động in tất cả ảnh ra giấy dán lên tường"
    ],
    "answer": 0,
    "explain": "Sao lưu đám mây giúp ảnh không bị mất theo thiết bị phần cứng và có thể đồng bộ sang điện thoại mới rất tiện lợi."
  }
];

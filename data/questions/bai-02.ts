import { Question } from "@/lib/types";

// Bài 2: Thực hành sử dụng hệ điều hành
export const questions: Question[] = [
  {
    "id": "b2-01",
    "q": "Tiện ích Check Disk (Error Checking) trong hệ điều hành Windows có chức năng chính là gì?",
    "options": [
      "Kiểm tra và khắc phục các lỗi logic của hệ thống tệp và các sector hỏng trên ổ đĩa",
      "Tăng tốc độ kết nối mạng Internet của máy tính",
      "Tự động xóa toàn bộ các tệp tin hình ảnh có trong máy tính",
      "Thay đổi độ phân giải của màn hình máy tính"
    ],
    "answer": 0,
    "explain": "Check Disk quét hệ thống tệp để tìm các lỗi toàn vẹn và đánh dấu các sector lỗi (bad sectors) nhằm ngăn chặn ghi dữ liệu vào vị trí hỏng."
  },
  {
    "id": "b2-02",
    "q": "Hiện tượng phân mảnh đĩa (Disk Fragmentation) xảy ra khi nào trên ổ đĩa cơ học (HDD)?",
    "options": [
      "Các phần của một tệp tin bị lưu trữ rải rác ở nhiều vùng không liên tục trên đĩa cứng",
      "Ổ đĩa bị nứt vỡ vật lý thành nhiều mảnh nhỏ do va đập",
      "Máy tính bị nhiễm nhiều loại virus cùng một lúc",
      "Dung lượng RAM bị chia nhỏ cho quá nhiều người sử dụng"
    ],
    "answer": 0,
    "explain": "Phân mảnh đĩa xảy ra sau thời gian dài xóa và tạo tệp mới, khiến dữ liệu của cùng một tệp bị phân tán rải rác, làm đầu đọc HDD phải di chuyển nhiều lần."
  },
  {
    "id": "b2-03",
    "q": "Tiện ích chống phân mảnh và tối ưu hóa đĩa (Optimize Drives / Defragmenter) có tác dụng gì?",
    "options": [
      "Sắp xếp lại các khối dữ liệu của tệp tin thành các vùng liên tục để tăng tốc độ đọc dữ liệu",
      "Tự động nâng cấp dung lượng ổ cứng từ 500GB lên 1000GB miễn phí",
      "Biến ổ đĩa HDD thành ổ đĩa thể rắn SSD siêu tốc",
      "Tự động cài đặt hệ điều hành Windows mới nhất"
    ],
    "answer": 0,
    "explain": "Chống phân mảnh gom các phần dữ liệu rời rạc của từng tệp lại gần nhau trên đĩa từ HDD, giúp đầu đọc cơ học di chuyển ít hơn, đọc tệp nhanh hơn."
  },
  {
    "id": "b2-04",
    "q": "Vì sao KHÔNG NÊN chạy tiện ích chống phân mảnh truyền thống (Defrag) trên ổ đĩa thể rắn (SSD)?",
    "options": [
      "Vì SSD truy xuất bằng mạch điện tử không có đầu đọc cơ học, việc chống phân mảnh gây hao mòn chu kỳ ghi của chip nhớ flash",
      "Vì làm như vậy sẽ khiến ổ SSD bị nổ do nhiệt độ quá cao",
      "Vì hệ điều hành Windows cấm hoàn toàn việc lưu tệp trên SSD",
      "Vì SSD tự động biến mất dữ liệu khi chạy chống phân mảnh"
    ],
    "answer": 0,
    "explain": "Ổ SSD truy cập mọi ô nhớ với thời gian bằng nhau nên không bị chậm do phân mảnh. Chạy Defrag làm ghi xóa liên tục khiến giảm tuổi thọ chip nhớ Flash NAND."
  },
  {
    "id": "b2-05",
    "q": "Tiện ích Disk Cleanup trong Windows giúp người dùng giải quyết vấn đề gì?",
    "options": [
      "Tìm và xóa các tệp tạm thời (temp files), tệp trong thùng rác và bộ nhớ đệm để giải phóng dung lượng đĩa",
      "Xóa sạch toàn bộ hệ điều hành đang dùng để cài lại từ đầu",
      "Lau sạch bụi bẩn vật lý bám trên vỏ ngoài của ổ cứng",
      "Tự động sửa chữa quạt tản nhiệt của thùng máy tính"
    ],
    "answer": 0,
    "explain": "Disk Cleanup quét và xóa an toàn các tệp rác không còn cần thiết (tệp tạm của hệ thống, tệp tải về tạm, Recycle Bin, Windows Update cũ)."
  },
  {
    "id": "b2-06",
    "q": "Để mở công cụ Task Manager (Quản lý tác vụ) trong Windows một cách nhanh nhất, em dùng tổ hợp phím nào?",
    "options": [
      "Ctrl + Shift + Esc",
      "Ctrl + Shift + S",
      "Alt + F4",
      "Windows + L"
    ],
    "answer": 0,
    "explain": "Tổ hợp phím Ctrl + Shift + Esc mở thẳng công cụ Task Manager mà không cần qua màn hình trung gian."
  },
  {
    "id": "b2-07",
    "q": "Trong Task Manager, tab nào cho phép người dùng quan sát mức độ sử dụng CPU, RAM, Ổ đĩa (Disk) và Mạng (Network) theo thời gian thực?",
    "options": [
      "Performance",
      "Details",
      "App history",
      "Services"
    ],
    "answer": 0,
    "explain": "Tab Performance hiển thị biểu đồ trực quan biến động tải của CPU, dung lượng RAM sử dụng, tốc độ đọc ghi ổ đĩa và băng thông mạng."
  },
  {
    "id": "b2-08",
    "q": "Khi một phần mềm ứng dụng bị treo (Not Responding), em có thể xử lý thế nào trong Task Manager?",
    "options": [
      "Chọn ứng dụng đó trong tab Processes và nhấn nút 'End task'",
      "Bấm nút 'Restart' để xóa vĩnh viễn phần mềm đó khỏi máy",
      "Tăng xung nhịp CPU lên mức tối đa",
      "Ngắt kết nối Internet của máy tính ngay lập tức"
    ],
    "answer": 0,
    "explain": "Chức năng End task trong Task Manager gửi tín hiệu cưỡng chế dừng tiến trình đang bị treo giải phóng tài nguyên CPU và RAM."
  },
  {
    "id": "b2-09",
    "q": "Phương thức đăng nhập sinh trắc học nào sau đây phổ biến trên cả máy tính xách tay và điện thoại thông minh hiện đại?",
    "options": [
      "Quét vân tay và nhận diện khuôn mặt",
      "Quét mã vạch trên áo đồng phục học sinh",
      "Đọc thẻ căn cước công dân qua camera",
      "Đo nhiệt độ cơ thể bằng bàn phím"
    ],
    "answer": 0,
    "explain": "Cảm biến vân tay (Fingerprint) và camera hồng ngoại nhận diện khuôn mặt (Face Unlock / Windows Hello) là hai công nghệ sinh trắc học thông dụng nhất."
  },
  {
    "id": "b2-10",
    "q": "Tính năng Windows Hello trên hệ điều hành Windows 10/11 cung cấp giải pháp gì?",
    "options": [
      "Đăng nhập không cần mật khẩu bằng sinh trắc học (khuôn mặt, vân tay) hoặc mã PIN an toàn",
      "Tự động gửi lời chào bằng giọng nói mỗi khi mở máy",
      "Kết nối bạn bè trên mạng xã hội tự động",
      "Tự động tải các trò chơi mới nhất về máy"
    ],
    "answer": 0,
    "explain": "Windows Hello là cơ chế xác thực bảo mật cấp doanh nghiệp của Microsoft hỗ trợ đăng nhập nhanh bằng nhận diện khuôn mặt hồng ngoại, vân tay hoặc mã PIN."
  },
  {
    "id": "b2-11",
    "q": "Khi quản lý tệp và thư mục trong File Explorer, thao tác nào giúp chọn nhiều tệp nằm LIÊN TIẾP nhau?",
    "options": [
      "Nhấp chọn tệp đầu, giữ phím Shift và nhấp chọn tệp cuối",
      "Nhấp chọn tệp đầu, giữ phím Ctrl và nhấp chọn từng tệp",
      "Giữ phím Alt và nhấp đúp chuột",
      "Nhấn tổ hợp phím Ctrl + A rồi ấn phím Delete"
    ],
    "answer": 0,
    "explain": "Giữ phím Shift cho phép chọn một dải tệp liên tục từ điểm đầu đến điểm cuối; trong khi giữ phím Ctrl dùng để chọn các tệp rời rạc."
  },
  {
    "id": "b2-12",
    "q": "Đường dẫn tuyệt đối của một tệp tin trong hệ điều hành Windows bắt đầu từ đâu?",
    "options": [
      "Ký tự ổ đĩa gốc kèm dấu hai chấm và dấu gạch chéo (ví dụ C:\\)",
      "Tên của tệp tin đó",
      "Thư mục người dùng hiện tại",
      "Biểu tượng Recycle Bin trên màn hình"
    ],
    "answer": 0,
    "explain": "Đường dẫn tuyệt đối (Absolute Path) chỉ rõ vị trí chính xác của tệp bắt đầu từ thư mục gốc của phân vùng ổ đĩa (ví dụ: D:\\Du-an-web\\bai-01.ts)."
  },
  {
    "id": "b2-13",
    "q": "Khi xóa một tệp tin bằng tổ hợp phím Shift + Delete trong Windows, điều gì sẽ xảy ra?",
    "options": [
      "Tệp tin bị xóa vĩnh viễn mà không chuyển vào Recycle Bin",
      "Tệp tin được chuyển vào Recycle Bin và có thể khôi phục lại",
      "Tệp tin được nhân bản thành hai bản sao",
      "Tệp tin được nén thành tệp zip lưu trên màn hình"
    ],
    "answer": 0,
    "explain": "Shift + Delete bỏ qua bước lưu tạm trong Thùng rác (Recycle Bin), xóa trực tiếp chỉ mục của tệp khỏi hệ thống tệp."
  },
  {
    "id": "b2-14",
    "q": "Để xem thông tin chi tiết về dung lượng, dung lượng còn trống và hệ thống tệp của một ổ đĩa, ta nhấp chuột phải vào biểu tượng ổ đĩa đó và chọn:",
    "options": [
      "Properties",
      "Format",
      "Eject",
      "Delete"
    ],
    "answer": 0,
    "explain": "Hộp thoại Properties hiển thị đầy đủ dung lượng đã dùng (Used space), dung lượng còn trống (Free space), hệ thống tệp (NTFS/FAT32) và các công cụ bảo trì."
  },
  {
    "id": "b2-15",
    "q": "Thao tác Format (Định dạng) một ổ đĩa USB có ý nghĩa gì?",
    "options": [
      "Khởi tạo lại hệ thống tệp mới và xóa toàn bộ dữ liệu hiện có trên ổ USB đó",
      "Sao chép toàn bộ dữ liệu của USB sang máy tính khác",
      "Cài đặt hệ điều hành Windows trực tiếp lên USB",
      "Nâng cấp chuẩn kết nối USB 2.0 thành USB 3.0"
    ],
    "answer": 0,
    "explain": "Format thiết lập cấu trúc lưu trữ và bảng chỉ mục tệp mới cho ổ đĩa, đồng thời xóa sạch mọi dữ liệu cũ đang có trên ổ đĩa đó."
  },
  {
    "id": "b2-16",
    "q": "Tab 'Startup apps' trong Task Manager cho phép người dùng điều chỉnh điều gì?",
    "options": [
      "Bật hoặc tắt các ứng dụng tự động khởi chạy cùng Windows khi bật máy",
      "Chỉnh sửa mã nguồn của hệ điều hành Windows",
      "Thay đổi ảnh nền màn hình khóa của máy tính",
      "Kiểm tra nhiệt độ nguồn điện cấp cho bo mạch chủ"
    ],
    "answer": 0,
    "explain": "Tắt các ứng dụng không cần thiết trong Startup apps giúp máy tính khởi động nhanh hơn rõ rệt và tiết kiệm RAM."
  },
  {
    "id": "b2-17",
    "q": "Phần mềm độc hại (Malware) làm tăng vọt mức sử dụng CPU lên 100% trong thời gian dài có thể được phát hiện qua công cụ nào?",
    "options": [
      "Task Manager",
      "Paint",
      "Notepad",
      "Calculator"
    ],
    "answer": 0,
    "explain": "Task Manager liệt kê tỷ lệ % tiêu thụ CPU của từng tiến trình, giúp người dùng dễ dàng nhận diện tiến trình lạ đang chiếm dụng tài nguyên."
  },
  {
    "id": "b2-18",
    "q": "Trong hệ điều hành di động Android/iOS, mục nào trong phần Cài đặt (Settings) giúp theo dõi dung lượng lưu trữ còn lại và các ứng dụng chiếm nhiều bộ nhớ nhất?",
    "options": [
      "Bộ nhớ / Dung lượng (Storage)",
      "Cài đặt Bluetooth",
      "Âm thanh và rung",
      "Hình nền và chủ đề"
    ],
    "answer": 0,
    "explain": "Mục Storage phân tích chi tiết dung lượng ảnh, video, ứng dụng, tệp hệ thống và gợi ý dọn dẹp các tệp rác."
  },
  {
    "id": "b2-19",
    "q": "Để bảo vệ an toàn cho thiết bị di động, người dùng NÊN kích hoạt phương thức bảo vệ nào sau đây?",
    "options": [
      "Khóa màn hình bằng mật khẩu mạnh kết hợp sinh trắc học và bật tính năng tìm thiết bị (Find My Device)",
      "Tắt hoàn toàn mật khẩu để mở máy cho nhanh",
      "Chia sẻ mật khẩu mở khóa cho tất cả bạn bè trong lớp",
      "Cắm sạc liên tục 24/24 giờ để máy không bị tắt nguồn"
    ],
    "answer": 0,
    "explain": "Khóa màn hình ngăn ngừa người lạ tiếp cận dữ liệu khi bị mất máy, kết hợp Find My Device cho phép định vị và xóa dữ liệu từ xa."
  },
  {
    "id": "b2-20",
    "q": "Tính năng Safe Mode (Chế độ an toàn) của hệ điều hành Windows được sử dụng khi nào?",
    "options": [
      "Khi hệ thống gặp lỗi sự cố và cần khởi động với các trình điều khiển và dịch vụ tối thiểu để chẩn đoán",
      "Khi người dùng muốn chơi các trò chơi đồ họa 3D nặng",
      "Khi máy tính cần tải phim tốc độ cao từ mạng",
      "Khi máy tính muốn tăng độ sáng màn hình lên mức cao nhất"
    ],
    "answer": 0,
    "explain": "Safe Mode chỉ nạp các thành phần cốt lõi của Windows, giúp loại trừ xung đột phần mềm hoặc mã độc gây lỗi màn hình xanh."
  },
  {
    "id": "b2-21",
    "q": "Phím tắt nào giúp đổi tên (Rename) nhanh một tệp hoặc thư mục đang được chọn trong File Explorer?",
    "options": [
      "F2",
      "F5",
      "F1",
      "F12"
    ],
    "answer": 0,
    "explain": "Phím F2 trong File Explorer kích hoạt chế độ chỉnh sửa tên tệp hoặc thư mục đang được chọn."
  },
  {
    "id": "b2-22",
    "q": "Để khôi phục (Restore) một tệp tin đã bị xóa nhầm vào Recycle Bin về vị trí ban đầu, ta làm thế nào?",
    "options": [
      "Mở Recycle Bin, nhấp chuột phải vào tệp cần lấy lại và chọn 'Restore'",
      "Bấm nút 'Empty Recycle Bin'",
      "Nhấn tổ hợp phím Shift + Delete",
      "Khởi động lại máy tính ba lần liên tiếp"
    ],
    "answer": 0,
    "explain": "Lệnh Restore trong Recycle Bin đưa tệp tin về đúng thư mục gốc trước khi bị xóa."
  },
  {
    "id": "b2-23",
    "q": "Tệp tin có đuôi .zip hoặc .rar thuộc loại tệp nào?",
    "options": [
      "Tệp lưu trữ nén chứa một hoặc nhiều tệp/thư mục khác",
      "Tệp video phim chất lượng cao",
      "Tệp chương trình thực thi tự động của hệ điều hành",
      "Tệp phông chữ tiếng Việt chuẩn quốc gia"
    ],
    "answer": 0,
    "explain": "Tệp .zip và .rar là định dạng nén dữ liệu giúp giảm kích thước và gom nhiều tệp thành một gói duy nhất để dễ chia sẻ."
  },
  {
    "id": "b2-24",
    "q": "Lợi ích lớn nhất của việc thiết lập nhiều tài khoản người dùng (User Accounts) trên cùng một máy tính là gì?",
    "options": [
      "Đảm bảo quyền riêng tư cho từng người và phân quyền quản trị an toàn",
      "Tăng tốc độ đọc ghi của ổ cứng lên gấp đôi",
      "Giúp máy tính có thể kết nối với hai màn hình khác nhau",
      "Tự động tăng dung lượng thanh nhớ RAM"
    ],
    "answer": 0,
    "explain": "Nhiều tài khoản giúp mỗi người có không gian lưu trữ cá nhân riêng biệt, cài đặt giao diện riêng và ngăn người dùng thông thường tự ý can thiệp cài đặt hệ thống."
  }
];

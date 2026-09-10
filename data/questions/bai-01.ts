import { Question } from "@/lib/types";

export const questionsBai01: Question[] = [
  {
    id: "b1-01",
    q: "Khái niệm nào sau đây mô tả chính xác nhất về Hệ điều hành (Operating System)?",
    options: [
      "Là tập hợp các chương trình điều khiển và quản lí thiết bị phần cứng, cung cấp môi trường để các phần mềm ứng dụng hoạt động",
      "Là phần mềm chuyên dụng để soạn thảo văn bản, tính toán số liệu và thiết kế trình chiếu",
      "Là một thiết bị phần cứng gắn trên bo mạch chủ để xử lý thông tin",
      "Là một giao thức mạng cho phép kết nối các máy tính qua Internet"
    ],
    answer: 0,
    explain: "Hệ điều hành đóng vai trò là cầu nối giữa phần cứng máy tính và phần mềm ứng dụng, quản lý tài nguyên hệ thống và cung cấp môi trường giao tiếp cho người dùng.",
  },
  {
    id: "b1-02",
    q: "Nhóm chức năng nào dưới đây thuộc nhiệm vụ cơ bản của hệ điều hành?",
    options: [
      "Quản lí tệp và thư mục, quản lí thiết bị ngoại vi, quản lí bộ nhớ và CPU, cung cấp giao diện người dùng",
      "Dịch văn bản tự động, dựng video chuyên nghiệp, chỉnh sửa ảnh nghệ thuật",
      "Kiểm tra ngữ pháp tiếng Anh, tạo trang web bằng HTML/CSS",
      "Sản xuất linh kiện điện tử vi mạch bán dẫn"
    ],
    answer: 0,
    explain: "Hệ điều hành chịu trách nhiệm quản lí tài nguyên phần cứng (CPU, RAM, ổ đĩa, thiết bị ngoại vi) và quản lí thông tin (tệp, thư mục), đồng thời cung cấp giao diện người dùng.",
  },
  {
    id: "b1-03",
    q: "Giao diện nào sau đây cho phép người dùng ra lệnh cho máy tính thông qua việc gõ các dòng lệnh văn bản bằng bàn phím?",
    options: [
      "Giao diện dòng lệnh (CLI - Command Line Interface)",
      "Giao diện đồ họa người dùng (GUI - Graphical User Interface)",
      "Giao diện cảm ứng chạm (Touch Screen Interface)",
      "Giao diện điều khiển bằng giọng nói (Voice User Interface)"
    ],
    answer: 0,
    explain: "Giao diện dòng lệnh (CLI) xuất hiện trong các hệ điều hành thế hệ đầu như MS-DOS, người dùng tương tác bằng cách gõ lệnh từ bàn phím thay vì dùng chuột nhấp vào biểu tượng.",
  },
  {
    id: "b1-04",
    q: "Mối quan hệ phân tầng giữa Người dùng, Phần mềm ứng dụng, Hệ điều hành và Phần cứng được thể hiện theo trật tự nào sau đây?",
    options: [
      "Người dùng ➔ Phần mềm ứng dụng ➔ Hệ điều hành ➔ Phần cứng",
      "Người dùng ➔ Hệ điều hành ➔ Phần mềm ứng dụng ➔ Phần cứng",
      "Phần cứng ➔ Phần mềm ứng dụng ➔ Hệ điều hành ➔ Người dùng",
      "Người dùng ➔ Phần cứng ➔ Hệ điều hành ➔ Phần mềm ứng dụng"
    ],
    answer: 0,
    explain: "Người dùng thao tác trên phần mềm ứng dụng; ứng dụng gửi yêu cầu đến hệ điều hành; hệ điều hành trực tiếp điều khiển thiết bị phần cứng để thực thi.",
  },
  {
    id: "b1-05",
    q: "Đặc điểm nào sau đây KHÔNG PHẢI là đặc trưng nổi bật của hệ điều hành dành cho thiết bị di động (như Android, iOS)?",
    options: [
      "Yêu cầu người dùng phải gõ lệnh văn bản phức tạp mới có thể mở ứng dụng",
      "Tối ưu hóa khả năng tương tác chạm, vuốt trên màn hình cảm ứng",
      "Quản lý năng lượng nghiêm ngặt nhằm kéo dài thời lượng pin",
      "Tích hợp sẵn các kết nối không dây linh hoạt (Wi-Fi, 4G/5G, Bluetooth, GPS)"
    ],
    answer: 0,
    explain: "Hệ điều hành di động được thiết kế trực quan với màn hình cảm ứng đa điểm, người dùng chỉ cần chạm vuốt, hoàn toàn không bắt buộc phải dùng dòng lệnh.",
  },
  {
    id: "b1-06",
    q: "Hệ điều hành nào sau đây là hệ điều hành mã nguồn mở được sử dụng phổ biến trên máy chủ và là nền tảng cho Android?",
    options: [
      "Linux",
      "Microsoft Windows",
      "macOS",
      "iOS"
    ],
    answer: 0,
    explain: "Linux là hệ điều hành mã nguồn mở (Open Source) rất mạnh mẽ, linh hoạt và được dùng làm nhân tảng cho hệ điều hành di động Android.",
  },
  {
    id: "b1-07",
    q: "Khi một máy tính đang chạy cùng lúc nhiều chương trình (ví dụ: vừa nghe nhạc, vừa gõ văn bản, vừa tải tệp tin), hệ điều hành đang thực hiện cơ chế nào?",
    options: [
      "Đa nhiệm (Multitasking)",
      "Đơn nhiệm (Single-tasking)",
      "Xử lý theo lô tuần tự (Batch processing)",
      "Chạy một luồng duy nhất (Single-threading)"
    ],
    answer: 0,
    explain: "Đa nhiệm (Multitasking) là khả năng của hệ điều hành cho phép thực thi đồng thời nhiều tiến trình hoặc ứng dụng tại cùng một thời điểm.",
  },
  {
    id: "b1-08",
    q: "Trong quá trình khởi động máy tính, hệ điều hành được nạp từ đâu vào đâu để bắt đầu hoạt động?",
    options: [
      "Từ bộ nhớ ngoài (ổ đĩa cứng/SSD) vào bộ nhớ trong (RAM)",
      "Từ bộ nhớ trong (RAM) sang ổ đĩa flash USB",
      "Từ màn hình máy tính vào bộ vi xử lý CPU",
      "Từ bàn phím vào màn hình hiển thị"
    ],
    answer: 0,
    explain: "Khi máy tính bật nguồn, chương trình khởi động trong ROM (BIOS/UEFI) sẽ tìm và nạp các mô-đun cốt lõi của hệ điều hành từ ổ cứng (lưu trữ ngoài) vào RAM để thực thi.",
  },
  {
    id: "b1-09",
    q: "Công nghệ xác thực sinh trắc học nào sau đây thường được hệ điều hành trên điện thoại thông minh hỗ trợ để mở khóa thiết bị?",
    options: [
      "Cảm biến vân tay và nhận diện khuôn mặt 3D",
      "Quét đĩa mềm hệ thống",
      "Đo nhiệt độ phòng học",
      "Nhận diện giọng nói của đài phát thanh"
    ],
    answer: 0,
    explain: "Các thiết bị di động thông minh hiện đại đều tích hợp nhận diện sinh trắc học vân tay (Fingerprint) hoặc khuôn mặt (Face ID) do hệ điều hành quản lý bảo mật.",
  },
  {
    id: "b1-10",
    q: "Phát biểu nào sau đây là ĐÚNG khi so sánh hệ điều hành cho máy tính cá nhân (PC) và hệ điều hành cho thiết bị di động?",
    options: [
      "Hệ điều hành di động được tối ưu sâu cho kích thước màn hình nhỏ và giới hạn dung lượng pin hơn so với PC",
      "Hệ điều hành PC không thể kết nối Internet, còn di động thì luôn kết nối",
      "Hệ điều hành di động không thể chạy được các trò chơi hay ứng dụng nhắn tin",
      "Hệ điều hành PC không hỗ trợ chuột hay bàn phím rời"
    ],
    answer: 0,
    explain: "Thiết bị di động có dung lượng pin hạn chế và màn hình nhỏ, do đó hệ điều hành di động phải tối ưu rất khắt khe về sử dụng năng lượng và diện tích hiển thị.",
  }
];

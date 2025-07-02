import React, { useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";

const nodeStyle = {
  borderRadius: 12,
  padding: 16,
  fontWeight: 600,
  fontSize: 16,
  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
  background: "linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)",
  border: "2px solid #6366f1",
};

const stackNodeStyle = {
  ...nodeStyle,
  background: "linear-gradient(135deg, #fef9c3 0%, #f0fdfa 100%)",
  border: "2px solid #f59e42",
  color: "#b45309",
};

const nodes: Node[] = [
  {
    id: "1",
    data: { label: "User Initiation" },
    position: { x: 0, y: 0 },
    style: nodeStyle,
  },
  {
    id: "2",
    data: { label: "Payment Prompt" },
    position: { x: 0, y: 120 },
    style: nodeStyle,
  },
  {
    id: "3",
    data: { label: "Payment Processing" },
    position: { x: 0, y: 240 },
    style: nodeStyle,
  },
  {
    id: "4",
    data: { label: "Payment Confirmation" },
    position: { x: 0, y: 360 },
    style: nodeStyle,
  },
  {
    id: "5a",
    data: { label: "Annual Payment" },
    position: { x: -180, y: 480 },
    style: nodeStyle,
  },
  {
    id: "5b",
    data: { label: "Monthly Payment" },
    position: { x: 180, y: 480 },
    style: nodeStyle,
  },
  {
    id: "6a",
    data: { label: "Vehicle Registration Verification" },
    position: { x: -180, y: 600 },
    style: nodeStyle,
  },
  {
    id: "6b",
    data: { label: "Monthly Verification (1 Month)" },
    position: { x: 180, y: 600 },
    style: nodeStyle,
  },
  {
    id: "7a",
    data: { label: "Verification Result" },
    position: { x: -180, y: 720 },
    style: nodeStyle,
  },
  {
    id: "7b",
    data: { label: "Payment Tracking & Suspension" },
    position: { x: 180, y: 720 },
    style: nodeStyle,
  },
  {
    id: "stack",
    data: {
      label: (
        <div style={{ textAlign: "center" }}>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
            Tech Stack
          </div>
          <div>React</div>
          <div>NodeJS</div>
          <div>Firebase</div>
          <div>MongoDB</div>
          <div>Cloudinary</div>
          <div>Paystack</div>
        </div>
      ),
    },
    position: { x: 0, y: 900 },
    style: stackNodeStyle,
    draggable: false,
  },
];

const edges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e3-4", source: "3", target: "4", animated: true },
  {
    id: "e4-5a",
    source: "4",
    target: "5a",
    label: "Annual",
    style: { stroke: "#6366f1" },
    labelStyle: { fill: "#6366f1", fontWeight: 700 },
  },
  {
    id: "e4-5b",
    source: "4",
    target: "5b",
    label: "Monthly",
    style: { stroke: "#f59e42" },
    labelStyle: { fill: "#f59e42", fontWeight: 700 },
  },
  { id: "e5a-6a", source: "5a", target: "6a", animated: true },
  { id: "e5b-6b", source: "5b", target: "6b", animated: true },
  { id: "e6a-7a", source: "6a", target: "7a", animated: true },
  { id: "e6b-7b", source: "6b", target: "7b", animated: true },
  {
    id: "e7a-stack",
    source: "7a",
    target: "stack",
    type: "smoothstep",
    animated: true,
  },
  {
    id: "e7b-stack",
    source: "7b",
    target: "stack",
    type: "smoothstep",
    animated: true,
  },
];

const nodeDetails: Record<string, React.ReactNode> = {
  "1": (
    <>
      <b>User Initiation</b>
      <br />
      Driver initiates the vehicle registration verification process.
    </>
  ),
  "2": (
    <>
      <b>Payment Prompt</b>
      <br />
      System prompts driver to pay annual (N60,000) or monthly (N5,000) Drivers'
      Income Tax.
    </>
  ),
  "3": (
    <>
      <b>Payment Processing</b>
      <br />
      Driver selects payment option and pays using a secure payment gateway.
    </>
  ),
  "4": (
    <>
      <b>Payment Confirmation</b>
      <br />
      System confirms payment and updates driver's payment status.
    </>
  ),
  "5a": (
    <>
      <b>Annual Payment</b>
      <br />
      One-time payment for the year. Immediate access to vehicle registration
      verification.
    </>
  ),
  "5b": (
    <>
      <b>Monthly Payment</b>
      <br />
      Recurring monthly payments. Verification status is temporarily activated
      for each month.
    </>
  ),
  "6a": (
    <>
      <b>Vehicle Registration Verification</b>
      <br />
      Driver inputs vehicle registration number for verification.
    </>
  ),
  "6b": (
    <>
      <b>Monthly Verification (1 Month)</b>
      <br />
      Verification status is temporarily activated for a month. Suspended if
      payment is not made.
    </>
  ),
  "7a": (
    <>
      <b>Verification Result</b>
      <br />
      System verifies vehicle registration and returns result.
    </>
  ),
  "7b": (
    <>
      <b>Payment Tracking & Suspension</b>
      <br />
      System tracks payment history, sends reminders, and suspends status if
      payment is missed.
    </>
  ),
  stack: (
    <>
      <b>Tech Stack</b>
      <br />
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        <li>
          <b>React</b>: Frontend UI
        </li>
        <li>
          <b>NodeJS</b>: Backend server
        </li>
        <li>
          <b>Firebase</b>: Auth, notifications
        </li>
        <li>
          <b>MongoDB</b>: Database
        </li>
        <li>
          <b>Cloudinary</b>: File/image storage
        </li>
        <li>
          <b>Paystack</b>: Payment gateway
        </li>
      </ul>
    </>
  ),
};

const fullNodeDetails: Record<string, React.ReactNode> = {
  "1": (
    <>
      <b>User Initiation – Full Details</b>
      <br />
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        <li>
          The driver accesses the platform (web/mobile app) and selects the
          option to begin vehicle registration verification.
        </li>
        <li>
          The system may require the driver to log in or create an account,
          ensuring secure access and personalized workflow tracking.
        </li>
        <li>
          Upon authentication, the system initializes a new verification
          session, logging the start time and associating it with the driver's
          profile.
        </li>
        <li>
          All actions are tracked for audit and compliance purposes, and the UI
          guides the user to the next step.
        </li>
      </ul>
    </>
  ),
  "2": (
    <>
      <b>Payment Prompt – Full Details</b>
      <br />
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        <li>
          The system checks the driver's payment status for the current period
          (annual/monthly).
        </li>
        <li>
          If payment is not up to date, a modal or page is displayed, outlining
          the two payment options: Annual (N60,000) or Monthly (N5,000).
        </li>
        <li>
          Each option is explained, including benefits, duration, and
          consequences of non-payment (e.g., suspension of verification access).
        </li>
        <li>
          The UI provides clear, actionable buttons for each payment type, and
          may show a comparison table for clarity.
        </li>
        <li>
          Payment reminders and due dates are highlighted, and the system may
          offer to save payment methods for convenience.
        </li>
      </ul>
    </>
  ),
  "3": (
    <>
      <b>Payment Processing – Full Details</b>
      <br />
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        <li>
          Upon selection, the system integrates with Paystack's secure payment
          gateway.
        </li>
        <li>
          The driver enters payment details (card, bank, USSD, etc.), and the
          system validates the input in real time.
        </li>
        <li>
          Payment is processed securely, with all sensitive data handled
          according to PCI DSS standards.
        </li>
        <li>
          On success, a transaction record is created in MongoDB, and a receipt
          is generated and sent to the driver (email/SMS/notification via
          Firebase).
        </li>
        <li>
          On failure, the user is notified with actionable error messages and
          options to retry or change payment method.
        </li>
      </ul>
    </>
  ),
  "4": (
    <>
      <b>Payment Confirmation – Full Details</b>
      <br />
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        <li>
          The system receives a webhook or callback from Paystack confirming
          payment status.
        </li>
        <li>
          Driver's payment status is updated in MongoDB, and the session is
          marked as paid.
        </li>
        <li>
          UI displays a success message, and the driver's access to verification
          is unlocked according to payment type.
        </li>
        <li>All payment events are logged for compliance and reporting.</li>
        <li>
          Automated notifications are sent via Firebase to confirm payment and
          next steps.
        </li>
      </ul>
    </>
  ),
  "5a": (
    <>
      <b>Annual Payment – Full Details</b>
      <br />
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        <li>
          Annual payment grants the driver uninterrupted access to vehicle
          registration verification for 12 months.
        </li>
        <li>
          The system sets a renewal reminder 30 days before expiry, and tracks
          the annual payment in the driver's payment history.
        </li>
        <li>All annual payments are aggregated for reporting and analytics.</li>
        <li>
          Driver can view payment receipts and status at any time in their
          dashboard.
        </li>
      </ul>
    </>
  ),
  "5b": (
    <>
      <b>Monthly Payment – Full Details</b>
      <br />
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        <li>
          Monthly payment activates verification status for 30 days from payment
          date.
        </li>
        <li>
          The system schedules automated reminders 5 days and 1 day before the
          next payment is due.
        </li>
        <li>
          If payment lapses, verification access is suspended, and the driver is
          notified immediately.
        </li>
        <li>
          All monthly payments are tracked, and the system can generate a
          payment calendar for the user.
        </li>
      </ul>
    </>
  ),
  "6a": (
    <>
      <b>Vehicle Registration Verification – Full Details</b>
      <br />
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        <li>Driver enters vehicle registration number into a secure form.</li>
        <li>
          The system validates the input format and queries the backend (NodeJS)
          for verification.
        </li>
        <li>
          Backend checks MongoDB for existing records, and if not found, queries
          the relevant government or third-party API.
        </li>
        <li>
          Verification result is cached for performance, and the driver is shown
          a detailed result page.
        </li>
        <li>All verification attempts are logged for audit and analytics.</li>
      </ul>
    </>
  ),
  "6b": (
    <>
      <b>Monthly Verification (1 Month) – Full Details</b>
      <br />
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        <li>
          Same as above, but access is time-limited to the current paid month.
        </li>
        <li>System checks payment status before each verification attempt.</li>
        <li>
          If payment is overdue, access is denied and the driver is prompted to
          pay.
        </li>
      </ul>
    </>
  ),
  "7a": (
    <>
      <b>Verification Result – Full Details</b>
      <br />
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        <li>
          System displays verification result, including vehicle details,
          registration status, and any flags or issues.
        </li>
        <li>Driver can download or print the verification certificate.</li>
        <li>
          All results are stored in MongoDB and can be accessed in the driver's
          history.
        </li>
        <li>Notifications are sent for successful or failed verifications.</li>
      </ul>
    </>
  ),
  "7b": (
    <>
      <b>Payment Tracking & Suspension – Full Details</b>
      <br />
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        <li>System maintains a detailed payment history for each driver.</li>
        <li>
          Automated reminders are sent for upcoming payments via Firebase.
        </li>
        <li>
          If payment is missed, verification access is suspended, and the driver
          is notified with instructions to restore access.
        </li>
        <li>
          Admins can view payment compliance reports and intervene if needed.
        </li>
      </ul>
    </>
  ),
  stack: (
    <>
      <b>Tech Stack – Full Details</b>
      <br />
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        <li>
          <b>React:</b> Used for building a responsive, interactive, and
          beautiful frontend UI. Handles all user interactions, state
          management, and renders the workflow diagram using React Flow.
        </li>
        <li>
          <b>NodeJS:</b> Serves as the backend server, handling API requests,
          business logic, and integration with third-party services (e.g.,
          government APIs for vehicle verification).
        </li>
        <li>
          <b>Firebase:</b> Provides authentication, real-time notifications
          (payment reminders, status updates), and can be used for analytics and
          crash reporting.
        </li>
        <li>
          <b>MongoDB:</b> Stores all user data, payment history, verification
          logs, and system events. Enables fast queries and flexible data
          modeling.
        </li>
        <li>
          <b>Cloudinary:</b> Manages file and image uploads (e.g., driver
          documents, vehicle images) with secure storage and fast delivery.
        </li>
        <li>
          <b>Paystack:</b> Handles all payment processing, webhooks, and
          transaction verification, ensuring secure and reliable payment flows.
        </li>
      </ul>
    </>
  ),
};

const WorkflowDiagram: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showFull, setShowFull] = useState(false);
  const onNodeClick = (_: any, node: Node) => {
    setSelected(node.id);
    setShowFull(false);
  };
  const closePanel = () => setSelected(null);
  const handleFullDetails = () => setShowFull(true);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(120deg, #f0fdfa 0%, #e0e7ff 100%)",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        style={{ minHeight: "100vh" }}
        onNodeClick={onNodeClick}
      >
        <MiniMap nodeColor={() => "#6366f1"} nodeStrokeWidth={3} />
        <Controls />
        <Background color="#a5b4fc" gap={24} />
      </ReactFlow>
      {selected && (
        <div
          style={{
            position: "fixed",
            top: 80,
            right: 40,
            minWidth: 320,
            maxWidth: 400,
            background: "white",
            borderRadius: 16,
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            padding: 28,
            zIndex: 1000,
            border: "2px solid #6366f1",
            animation: "fadeIn 0.3s",
          }}
        >
          <button
            onClick={closePanel}
            style={{
              position: "absolute",
              top: 12,
              right: 16,
              background: "none",
              border: "none",
              fontSize: 22,
              color: "#6366f1",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            ×
          </button>
          <div style={{ marginTop: 8, fontSize: 17, color: "#222" }}>
            {showFull ? fullNodeDetails[selected] : nodeDetails[selected]}
          </div>
          {!showFull && (
            <button
              onClick={handleFullDetails}
              style={{
                marginTop: 24,
                background: "linear-gradient(90deg, #6366f1 0%, #f59e42 100%)",
                color: "white",
                border: "none",
                borderRadius: 8,
                padding: "10px 22px",
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(99,102,241,0.12)",
                transition: "background 0.2s",
              }}
            >
              Full Details
            </button>
          )}
        </div>
      )}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default WorkflowDiagram;

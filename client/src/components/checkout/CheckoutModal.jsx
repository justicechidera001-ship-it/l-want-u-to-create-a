import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  X,
  CreditCard,
  CheckCircle2,
  Lock,
  ArrowRight,
  Truck,
  Box,
  Download,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems = [],
  totalAmount = 0,
  subtotal = 0,
  shipping = 0,
  discount = 0,
  onOrderPlaced
}) {
  const [step, setStep] = useState('shipping'); // shipping, payment, success
  const [loading, setLoading] = useState(false);
  const [orderResult, setOrderResult] = useState(null);

  // Form State
  const [shippingForm, setShippingForm] = useState({
    fullName: 'Alex Rivera',
    email: 'alex.rivera@example.com',
    address: '742 Evergreen Terrace',
    city: 'San Francisco',
    state: 'CA',
    postalCode: '94107',
    country: 'United States'
  });

  const [paymentMethod, setPaymentMethod] = useState('card'); // card, apple, klarna
  const [cardForm, setCardForm] = useState({
    number: '•••• •••• •••• 4242',
    name: 'ALEX RIVERA',
    expiry: '12/28',
    cvv: '984'
  });

  if (!isOpen) return null;

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        customer: shippingForm,
        items: cartItems.map(item => ({
          productId: item.productId,
          name: item.productName,
          type: item.type,
          primaryColor: item.primaryColor,
          accentColor: item.accentColor,
          fabricId: item.fabricId,
          fabricName: item.fabricName,
          size: item.size,
          decal: item.decal,
          quantity: item.quantity,
          price: item.price
        })),
        paymentMethod: paymentMethod === 'card' ? 'Credit Card (ending 4242)' : paymentMethod.toUpperCase(),
        subtotal,
        shipping,
        discount,
        total: totalAmount
      };

      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (data.success && data.order) {
        setOrderResult(data.order);
        setStep('success');
        onOrderPlaced(data.order);

        // Confetti celebration
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } catch (err) {
      console.error('Order creation failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={step === 'success' ? onClose : undefined}
        className="fixed inset-0 bg-dark-950/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-dark-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-dark-850">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-neon font-bold">
                Atelier 3D Checkout
              </span>
            </div>
            <h3 className="text-xl font-display font-bold text-white mt-0.5">
              {step === 'shipping' && '1. Delivery Address'}
              {step === 'payment' && '2. Secure Payment'}
              {step === 'success' && 'Order Confirmed!'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: SHIPPING FORM */}
        {step === 'shipping' && (
          <form onSubmit={handleShippingSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="text-xs font-mono text-slate-400 block mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  value={shippingForm.fullName}
                  onChange={(e) => setShippingForm({ ...shippingForm, fullName: e.target.value })}
                  className="w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-neon font-sans"
                />
              </div>

              <div className="col-span-2">
                <label className="text-xs font-mono text-slate-400 block mb-1.5">Email for Tracking Updates</label>
                <input
                  type="email"
                  required
                  value={shippingForm.email}
                  onChange={(e) => setShippingForm({ ...shippingForm, email: e.target.value })}
                  className="w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-neon font-sans"
                />
              </div>

              <div className="col-span-2">
                <label className="text-xs font-mono text-slate-400 block mb-1.5">Street Address</label>
                <input
                  type="text"
                  required
                  value={shippingForm.address}
                  onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })}
                  className="w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-neon font-sans"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5">City</label>
                <input
                  type="text"
                  required
                  value={shippingForm.city}
                  onChange={(e) => setShippingForm({ ...shippingForm, city: e.target.value })}
                  className="w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-neon"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5">Postal Code</label>
                <input
                  type="text"
                  required
                  value={shippingForm.postalCode}
                  onChange={(e) => setShippingForm({ ...shippingForm, postalCode: e.target.value })}
                  className="w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-neon"
                />
              </div>

              <div className="col-span-2">
                <label className="text-xs font-mono text-slate-400 block mb-1.5">Country</label>
                <select
                  value={shippingForm.country}
                  onChange={(e) => setShippingForm({ ...shippingForm, country: e.target.value })}
                  className="w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-neon"
                >
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Germany">Germany</option>
                  <option value="Japan">Japan</option>
                  <option value="Canada">Canada</option>
                  <option value="France">France</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Total: ${totalAmount}</span>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-brand-neon text-dark-950 font-display font-extrabold text-xs tracking-wider flex items-center space-x-2 hover:opacity-90 transition shadow-glow-neon"
              >
                <span>CONTINUE TO PAYMENT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: PAYMENT FORM */}
        {step === 'payment' && (
          <form onSubmit={handlePaymentSubmit} className="p-6 space-y-5">
            {/* Payment Method Selector */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'card', label: 'Credit Card', icon: CreditCard },
                { id: 'apple', label: 'Apple Pay', icon: ShieldCheck },
                { id: 'klarna', label: 'Klarna 4x', icon: Sparkles }
              ].map((m) => {
                const Icon = m.icon;
                const isSelected = paymentMethod === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPaymentMethod(m.id)}
                    className={`py-3 px-2 rounded-xl border flex flex-col items-center justify-center text-xs transition ${
                      isSelected
                        ? 'border-brand-cyan bg-brand-cyan/10 text-brand-cyan font-bold ring-2 ring-brand-cyan/30'
                        : 'border-slate-800 text-slate-400 hover:text-white bg-dark-950'
                    }`}
                  >
                    <Icon className="w-4 h-4 mb-1" />
                    <span>{m.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Virtual Card Representation */}
            <div className="relative rounded-2xl p-5 bg-gradient-to-tr from-slate-900 via-dark-800 to-slate-900 border border-slate-700 shadow-xl overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono text-brand-cyan font-bold tracking-widest">ATELIER BLACK</span>
                <span className="text-xs font-mono text-slate-400">VISA / MASTERCARD</span>
              </div>
              <div className="text-lg font-mono tracking-widest text-white mb-4">
                4242 •••• •••• 9842
              </div>
              <div className="flex justify-between items-end text-xs font-mono text-slate-300">
                <div>
                  <span className="block text-[9px] text-slate-500 uppercase">Cardholder</span>
                  <span>{shippingForm.fullName.toUpperCase()}</span>
                </div>
                <div>
                  <span className="block text-[9px] text-slate-500 uppercase">Expires</span>
                  <span>12 / 28</span>
                </div>
              </div>
            </div>

            {/* Simulated Card Inputs */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Card Number</label>
                <div className="relative">
                  <CreditCard className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={cardForm.number}
                    onChange={(e) => setCardForm({ ...cardForm, number: e.target.value })}
                    className="w-full bg-dark-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-brand-neon"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Expiration</label>
                  <input
                    type="text"
                    required
                    value={cardForm.expiry}
                    onChange={(e) => setCardForm({ ...cardForm, expiry: e.target.value })}
                    className="w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-brand-neon"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">CVC / CVV</label>
                  <input
                    type="password"
                    required
                    maxLength={4}
                    value={cardForm.cvv}
                    onChange={(e) => setCardForm({ ...cardForm, cvv: e.target.value })}
                    className="w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-brand-neon"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep('shipping')}
                className="text-xs font-mono text-slate-400 hover:text-white"
              >
                ← Back
              </button>

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-xl bg-brand-neon text-dark-950 font-display font-extrabold text-xs tracking-wider flex items-center space-x-2 hover:opacity-90 transition shadow-glow-neon"
              >
                <Lock className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>{loading ? 'AUTHORIZING...' : `PAY $${totalAmount}`}</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: ORDER SUCCESS */}
        {step === 'success' && orderResult && (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-brand-neon/20 border border-brand-neon/50 text-brand-neon flex items-center justify-center mx-auto shadow-glow-neon animate-bounce">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs font-mono text-brand-neon font-bold uppercase tracking-wider">
                Production Queue Initiated
              </span>
              <h2 className="text-2xl font-display font-extrabold text-white mt-1">
                Thank You, {orderResult.customer?.fullName}!
              </h2>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Your custom 3D garment specs have been submitted to our digital cutter and tailoring workshop.
              </p>
            </div>

            {/* Order Confirmation Code Box */}
            <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Order Reference</span>
                <span className="text-brand-cyan font-bold">{orderResult.orderId}</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Items Ordered</span>
                <span className="text-white">{orderResult.items?.length} Bespoke Pieces</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Total Charged</span>
                <span className="text-brand-neon font-bold">${orderResult.total}</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Estimated Delivery</span>
                <span className="text-white">3-5 Business Days</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  onClose();
                  window.location.hash = `#track-${orderResult.orderId}`;
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-brand-neon text-dark-950 font-display font-extrabold text-xs tracking-wider flex items-center justify-center space-x-2 hover:opacity-90 shadow-glow-neon"
              >
                <Truck className="w-4 h-4" />
                <span>TRACK MY ORDER</span>
              </button>

              <button
                onClick={onClose}
                className="py-3 px-5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Back to Studio
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

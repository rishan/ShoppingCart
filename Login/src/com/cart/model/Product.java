package com.cart.model;

import java.io.Serializable;

public class Product implements Serializable {

	private String ProductID;
	private String Productimage;
	private String Description;
	private String Price;
	private String pricerange;
	private String typee;
	private String stock;
	private double UnitPrice;
	private double Discount;
	private String Brand;
	private String HandsetColor;
	private String Form1;
	private String SIMSize;
	private String CallFeatures;
	private String ModelName;
	private String TouchScreen;
	private String SIMType;
	private String FrontCamera;
	private String RearCamera;
	private String Zoom;
	private String Otherdetails;

	public String getProductimage() {
		return Productimage;
	}

	public void setProductimage(String productimage) {
		Productimage = productimage;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	public String getPrice() {
		return Price;
	}

	public void setPrice(String price) {
		Price = price;
	}

	public String getPricerange() {
		return pricerange;
	}

	public void setPricerange(String pricerange) {
		this.pricerange = pricerange;
	}

	public String getTypee() {
		return typee;
	}

	public void setTypee(String typee) {
		this.typee = typee;
	}

	public String getStock() {
		return stock;
	}

	public void setStock(String stock) {
		this.stock = stock;
	}

	public double getUnitPrice() {
		return UnitPrice;
	}

	public void setUnitPrice(double unitPrice) {
		UnitPrice = unitPrice;
	}

	public double getDiscount() {
		return Discount;
	}

	public void setDiscount(double discount) {
		Discount = discount;
	}

	public String getBrand() {
		return Brand;
	}

	public void setBrand(String brand) {
		Brand = brand;
	}

	public String getHandsetColor() {
		return HandsetColor;
	}

	public void setHandsetColor(String handsetColor) {
		HandsetColor = handsetColor;
	}

	public String getForm1() {
		return Form1;
	}

	public void setForm1(String form1) {
		Form1 = form1;
	}

	public String getSIMSize() {
		return SIMSize;
	}

	public void setSIMSize(String sIMSize) {
		SIMSize = sIMSize;
	}

	public String getCallFeatures() {
		return CallFeatures;
	}

	public void setCallFeatures(String callFeatures) {
		CallFeatures = callFeatures;
	}

	public String getModelName() {
		return ModelName;
	}

	public void setModelName(String modelName) {
		ModelName = modelName;
	}

	public String getTouchScreen() {
		return TouchScreen;
	}

	public void setTouchScreen(String touchScreen) {
		TouchScreen = touchScreen;
	}

	public String getSIMType() {
		return SIMType;
	}

	public void setSIMType(String sIMType) {
		SIMType = sIMType;
	}

	public String getFrontCamera() {
		return FrontCamera;
	}

	public void setFrontCamera(String frontCamera) {
		FrontCamera = frontCamera;
	}

	public String getRearCamera() {
		return RearCamera;
	}

	public void setRearCamera(String rearCamera) {
		RearCamera = rearCamera;
	}

	public String getZoom() {
		return Zoom;
	}

	public void setZoom(String zoom) {
		Zoom = zoom;
	}

	public String getOtherdetails() {
		return Otherdetails;
	}

	public void setOtherdetails(String otherdetails) {
		Otherdetails = otherdetails;
	}

	public String getProductID() {
		return ProductID;
	}

	public void setProductID(String productID) {
		ProductID = productID;
	}

}
